// Node checks with a stubbed DOM; not a Browser visual test.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const storage=new Map(),elements=new Map();
const element=()=>({innerHTML:'',textContent:'',dataset:{},style:{},classList:{add(){},toggle(){}},querySelector(){return element()},querySelectorAll(){return []},insertAdjacentHTML(_,s){this.innerHTML+=s},addEventListener(){},focus(){},append(){},getBoundingClientRect(){return {width:700,height:250}},getContext(){return new Proxy({},{get:()=>()=>{}})}});
const document={querySelector(s){if(!elements.has(s))elements.set(s,element());return elements.get(s)},querySelectorAll(){return []},createElement:element};
const c=vm.createContext({assert,document,window:{addEventListener(){}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},location:{hash:'#home'},gardenBanner:()=>'',devicePixelRatio:1,alert(){},console});
vm.runInContext(['data.js','hanlin-data.js','vocab-data.js','mistake-store.js','app.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n'),c);

vm.runInContext(`
assert.equal(new Set(units.map(u=>u.id)).size,units.length);
assert.deepEqual(units.slice(-2).map(u=>u.id),['u51','u52']);
for(const [id,words,paragraphs,practiceCount] of [['u51',18,6,43],['u52',23,14,51]]){
 const u=unitById(id);assert.equal(u.vocab.length,words);assert.equal(u.text.length,paragraphs);
 assert.equal(u.practice.reduce((n,g)=>n+g.items.length,0),practiceCount);
 for(const [en,zh] of u.text){assert(en.length>5);assert(zh.trim().length>0);}
 for(const v of u.vocab){assert(u.text.some(p=>p[0].includes(v[3])),v[0]);assert(v[3].toLowerCase().includes(v[4].toLowerCase()));assert(v[1]);assert(v[2]);}
 readingCatalog();assert(document.querySelector('#app').innerHTML.includes(u.title));
 lesson(id);assert(document.querySelector('#part-content').innerHTML.includes('查看參考答案'));assert(document.querySelector('#part-content').innerHTML.includes(esc(u.text.at(-1)[0])));
 renderPart('vocab');assert(document.querySelector('#part-content').innerHTML.includes(esc(u.vocab.at(-1)[3])));
 const before=scores().length;
 renderPart('a');assert.equal(testA.questions.length,words);
 for(const q of testA.questions){assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(q.choices.includes(q.answer));}
 testA.correct=words;finishA();assert.equal(scores().length,before);
 renderPart('b');assert.equal(testB.questions.length,words);assert(document.querySelector('#part-content').innerHTML.includes('<mark>'));
 testB.correct=words;finishB();assert.equal(scores().length,before+1);assert.equal(scores().at(-1).unit,id);assert.equal(scores().at(-1).total,100);
 finishB();assert.equal(scores().length,before+1);
 progress();assert(document.querySelector('#app').innerHTML.includes('score-chart'));
 lesson(id);renderPart('b');testB.correct=0;finishB();assert.equal(scores().length,before+1);
 renderPart('a');testA.correct=0;finishA();assert.equal(scores().length,before+2);assert.equal(scores().at(-1).total,0);
 startTestA();assert.equal(testB,null);
}
const a=unitById('u51'),b=unitById('u52');
assert(a.vocab.find(v=>v[0]==='tell … apart')[4]==='tell them apart');
assert(b.vocab.find(v=>v[0]==='reduce')[1]==='v.');
assert(b.practice.some(g=>g.items.some(i=>i[1].includes('A、C'))));
assert.equal(scores().length,4);
`,c);
console.log('PASS: Unit 5.1 and 5.2 source examples, 41 cloze forms, 94 supplemental items, catalog/parts, four unique choices, both quiz orders, separate scores, retakes and chart rendering. Stubbed DOM; not Browser visual QA.');
