// Node checks with a stubbed DOM; not a Browser visual test.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const storage=new Map(),elements=new Map();
const element=()=>({innerHTML:'',textContent:'',dataset:{},style:{},classList:{add(){},toggle(){}},querySelector(){return element()},querySelectorAll(){return []},insertAdjacentHTML(_,s){this.innerHTML+=s},addEventListener(){},focus(){},append(){},getBoundingClientRect(){return {width:700,height:250}},getContext(){return new Proxy({},{get:()=>()=>{}})}});
const document={querySelector(s){if(!elements.has(s))elements.set(s,element());return elements.get(s)},querySelectorAll(){return []},createElement:element};
const c=vm.createContext({assert,document,window:{addEventListener(){}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},location:{hash:'#home'},gardenBanner:()=>'',devicePixelRatio:1,alert(){},console});
vm.runInContext(['data.js','hanlin-data.js','vocab-data.js','mistake-store.js','amc-data.js','amc.js','app.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n'),c);



vm.runInContext(`
const expected=[['amc-10-01',8,34,13],['amc-10-02',6,27,11],['amc-11-01',4,17,9],['amc-11-02',5,25,13]];
assert.equal(amcUnits.length,4);assert.equal(new Set(amcUnits.map(u=>u.id)).size,4);
progress();assert(document.querySelector('#app').innerHTML.includes('尚未有完整'));
home();assert(document.querySelector('#app').innerHTML.includes('進入 AMC 課程'));
amcCatalog();for(const u of amcUnits) assert(document.querySelector('#app').innerHTML.includes(u.id));
for(const [id,paragraphs,words,listening] of expected) {
 const u=unitById(id),before=scores().length;
 assert.equal(u.text.length,paragraphs);assert.equal(u.vocab.length,words);assert.equal(u.vocabQuiz.length,words);assert.equal(u.listening.length,listening);
 for(const pair of u.text){assert(pair[0].trim());assert(pair[1].trim());}
 for(const [i,v] of u.vocab.entries()) {assert(v[3].toLowerCase().includes(v[4].toLowerCase()),v[0]);assert.equal(u.vocabQuiz[i].example,v[3]);assert.equal(u.vocabQuiz[i].answer,v[2]);assert(v[5]);}
 for(const q of [...u.vocabQuiz,...u.listening]) {assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert.equal(q.choices.filter(c=>c===q.answer).length,1);}
 for(const q of u.listening) {assert(u.text[q.passage][0].includes(q.audio));assert(q.explanation);for(const s of [q.prompt,q.answer,...q.choices]){assert(/[a-z]/i.test(s));assert(!/[\u4e00-\u9fff]/.test(s));}}
 lesson(id);assert(document.querySelector('#part-content').innerHTML.includes(esc(u.text.at(-1)[0])));
 renderPart('vocab');assert(document.querySelector('#part-content').innerHTML.includes(esc(u.vocab.at(-1)[3])));
 for(const part of ['a','b']) {
  renderPart(part); const test=part==='a'?testA:testB;
  assert.equal(test.questions.length,part==='a'?words:listening);
  if(part==='b') assert(!document.querySelector('#part-content').innerHTML.includes(esc(test.questions[0].audio)));
  while(test.index<test.questions.length){const q=test.questions[test.index];const button={dataset:{amcChoice:String(q.choices.indexOf(q.answer))},disabled:false};answerAmcQuiz(part,button);const count=test.correct;answerAmcQuiz(part,button);assert.equal(test.correct,count);test.index++;showAmcQuiz(part);}
  assert.equal(test.correct,test.questions.length);
  assert.equal(scores().length,before+(part==='b'?1:0));
 }
 assert.equal(scores().at(-1).unit,id);assert.equal(scores().at(-1).total,100);finishPair('b');assert.equal(scores().length,before+1);
 progress();assert(document.querySelector('#app').innerHTML.includes('score-chart'));
 lesson(id);
 for(const part of ['b','a']) {
  renderPart(part);const test=part==='a'?testA:testB;
  while(test.index<test.questions.length){const q=test.questions[test.index];answerAmcQuiz(part,{dataset:{amcChoice:String(q.choices.findIndex(c=>c!==q.answer))},disabled:false});test.index++;showAmcQuiz(part);}
 }
 assert.equal(scores().length,before+2);assert.equal(scores().at(-1).total,0);
 const saved=mistakeBank().filter(m=>m.id.startsWith('amc:'+id+':'));assert.equal(saved.length,words+listening);
 for(const m of saved.filter(m=>m.id.includes(':b:'))){assert(m.audio);assert(m.explanation);assert(m.choices.includes(m.correct));}
 startAmcQuiz('a');assert.equal(testB,null);
}
assert.equal(scores().length,8);assert.equal(new Set(mistakeBank().map(m=>m.id)).size,mistakeBank().length);
mistakesPage();assert(document.querySelector('#app').innerHTML.includes('AMC課程'));
`,c);
console.log('PASS: all 4 AMC Units; 23 bilingual passages, 103 vocabulary questions, 46 English listening questions; source alignment, unique choices, hidden transcripts, correct/wrong answer paths, both quiz orders, per-unit history, retakes, duplicate guards and 149 unique mistake records. Stubbed DOM; not Browser visual QA.');
