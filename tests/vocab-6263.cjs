// Run from the project root: node tests/vocab-6263.cjs
const fs = require('node:fs'), vm = require('node:vm'), assert = require('node:assert/strict');
const storage = new Map(), events = {}, elements = new Map();
const element = () => ({innerHTML:'',textContent:'',disabled:false,dataset:{},classList:{add(){},toggle(){}},append(child){this.child=child;},querySelector(){return element();},querySelectorAll(){return [];}});
let buttons=[];
const document={querySelector(s){if(!elements.has(s))elements.set(s,element());return elements.get(s);},querySelectorAll(s){return s==='[data-zhishi-choice]'?buttons:[];},createElement:element};
const c=vm.createContext({assert,document,window:{addEventListener(k,v){events[k]=v;}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},location:{hash:'#vocab'},gardenBanner:()=>'',console});
vm.runInContext(['vocab-data.js','mistake-store.js','app.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n'),c);
const run=code=>vm.runInContext(code,c);
run(`
const expected=[
'dislike dizzy dread eager embarrass emotional enjoyable envy exaggerate exhaust expectation expressive fantasy fearful fond fright frighten frustrate frustration furious giggle glory grace grateful gratitude grief grin guilty harsh hateful hatred hesitation homesick hopeful horrible horrify horror hug humor identify impress impression inspiration inspire instinct'.split(' '),
'insult intuition jealous jealousy joyful laughter leisurely lousy mercy merry mischief mislead misunderstand neglect offend offense offensive panic passion pessimistic pity rage regret relieve reluctant satisfaction scary shameful sincerity sorrow suffer suspect suspicion suspicious sympathetic sympathy tense tension terror thankful tolerable tolerance tolerant tolerate troublesome weep'.split(' ')
];
const added=vocabUnits.slice(-2);
assert.deepEqual(added.map(u=>u.records.length),[90,83]);
assert.equal(new Set(vocabUnits.flatMap(u=>u.records.map(v=>v.id))).size,vocabUnits.reduce((n,u)=>n+u.records.length,0));
added.forEach((u,index)=>{
 assert.equal(u.id,'vocab-zhishi-6-'+(index+2));
 const main=[...new Set(u.records.filter(v=>!v.supplement).map(v=>v.word))];
 assert.deepEqual(main,expected[index]);
 activeVocabUnit=u;
 const allowed=new Set(u.records.map(zhishiAnswer));
 for(const v of u.records){
  for(const k of ['word','phonetic','pos','meaning','example','translation','answerForm'])assert(v[k]?.trim(),v.id+': '+k);
  const blank=zhishiBlank(v);assert(blank.includes('________'),v.id);assert.notEqual(blank,v.example);
  const orders=new Set();
  for(let j=0;j<25;j++){const q=zhishiQuestion(v);assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(q.choices.includes(zhishiAnswer(v)));assert(q.choices.every(x=>allowed.has(x)));orders.add(q.choices.join('|'));}
  assert(orders.size>1,'choice shuffle '+v.id);
 }
 startZhishiQuiz();const first=zhishiTest.questions.map(q=>q.v.id).join('|');startZhishiQuiz();assert.notEqual(first,zhishiTest.questions.map(q=>q.v.id).join('|'));
 assert.equal(zhishiTest.questions.length,u.records.length);
 zhishi(u.id);assert(document.querySelector('#app').innerHTML.includes(u.title));assert(document.querySelector('#zhishi-content').innerHTML.includes(u.records[0].translation));
});
activeVocabUnit=added[0];startZhishiQuiz();globalThis.q=zhishiTest.questions[0];
`);
buttons=run('q.choices').map(choice=>({...element(),dataset:{zhishiChoice:choice}}));
c.wrong=buttons.find(b=>b.dataset.zhishiChoice!==run('zhishiAnswer(q.v)'));
run(`answerZhishi(wrong,q);assert.equal(zhishiTest.index,0);assert.equal(mistakeBank().length,1);assert(document.querySelector('#zhishi-feedback').textContent.includes(q.v.meaning));`);
assert(buttons.every(b=>b.disabled&&b.innerHTML.includes('choice-meaning')));
assert(elements.get('.quiz-actions').child.textContent.includes('下一題'));
run(`
const stored=mistakeBank()[0],snapshot=JSON.stringify(stored.choices);
storeMistake({...stored,question:'changed',choices:[...stored.choices].reverse()},stored.selected);
assert.equal(mistakeBank().length,1);assert.equal(mistakeBank()[0].wrongCount,2);assert.equal(JSON.stringify(mistakeBank()[0].choices),snapshot);assert.equal(mistakeBank()[0].question,stored.question);
assert.equal(markMistakeCorrect(stored.id).streak,1);assert.equal(markMistakeCorrect(stored.id).streak,2);
storeMistake(stored,stored.selected);assert.equal(mistakeBank()[0].streak,0);
markMistakeCorrect(stored.id);markMistakeCorrect(stored.id);assert(markMistakeCorrect(stored.id).removed);assert.equal(mistakeBank().length,0);
`);
events.keydown({key:'Enter',preventDefault(){}});assert.equal(run('zhishiTest.index'),1);
console.log('PASS: 91 main headwords, 173 records; complete fields, cloze forms, four same-Unit choices, shuffling, rendered content, manual/Enter advance, immutable mistake snapshots and three-correct removal. DOM is stubbed; this is not a Browser visual test.');
