// Node checks with a stubbed DOM; not a Browser visual test.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const storage=new Map(),elements=new Map();
const element=()=>({innerHTML:'',textContent:'',dataset:{},style:{},classList:{add(){},toggle(){}},querySelector(){return element()},querySelectorAll(){return []},insertAdjacentHTML(_,s){this.innerHTML+=s},addEventListener(){},focus(){},append(){},getBoundingClientRect(){return {width:700,height:250}},getContext(){return new Proxy({},{get:()=>()=>{}})}});
const document={querySelector(s){if(!elements.has(s))elements.set(s,element());return elements.get(s)},querySelectorAll(){return []},createElement:element};
const c=vm.createContext({assert,document,window:{addEventListener(){}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},location:{hash:'#home'},gardenBanner:()=>'',devicePixelRatio:1,alert(){},console});
vm.runInContext(['data.js','hanlin-data.js','vocab-data.js','mistake-store.js','app.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n'),c);
vm.runInContext(`
const u=unitById('u42');
assert.equal(units.length,7);assert.equal(new Set(units.map(u=>u.id)).size,units.length);
assert.equal(u.text.length,5);assert.equal(u.vocab.length,21);
assert.deepEqual(u.practice.map(g=>g.items.length),[3,8,8,7,6]);
for(const v of u.vocab){assert(v.every(x=>typeof x==='string'&&x.length));assert(u.text.some(p=>p[0].includes(v[3])));assert(new RegExp('\\\\b'+v[4]+'\\\\b','i').test(v[3]),v[0]);}
readingCatalog();assert(document.querySelector('#app').innerHTML.includes('The Art of the Elephants'));
lesson('u42');assert(document.querySelector('#part-content').innerHTML.includes('參考答案'));assert(document.querySelector('#part-content').innerHTML.includes('原題有疑義'));
renderPart('vocab');assert(document.querySelector('#part-content').innerHTML.includes('are even willing to'));
progress();assert(document.querySelector('#app').innerHTML.includes('尚未有完整'));
lesson('u42');startTestA();assert.equal(testA.questions.length,21);
for(const q of testA.questions){assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(q.choices.includes(q.answer));}
testA.correct=20;finishA();assert.equal(scores().length,0);assert(document.querySelector('#part-content').innerHTML.includes('測驗 A 完成'));
renderPart('b');assert.equal(testB.questions.length,21);assert(document.querySelector('#part-content').innerHTML.includes('<mark>'));
testB.correct=21;finishB();assert.equal(scores().length,1);assert.equal(scores()[0].unit,'u42');assert.equal(scores()[0].total,98);
finishB();assert.equal(scores().length,1);
progress();assert(document.querySelector('#app').innerHTML.includes('score-chart'));assert(document.querySelector('#app').innerHTML.includes('Unit 4.2'));
lesson('u42');renderPart('b');testB.correct=21;finishB();assert(document.querySelector('#part-content').innerHTML.includes('測驗 B 完成'));assert.equal(scores().length,1);
renderPart('a');testA.correct=21;finishA();assert.equal(scores().length,2);assert.equal(scores()[1].total,100);
startTestA();assert.equal(testB,null);assert.equal(scores().length,2);
assert.equal(normalize(' ON THEIR OWN! '),normalize('on their own'));assert.equal(masked('supplies'),'s______s');
`,c);
console.log('PASS: 5 full paragraphs, 21 source examples/cloze forms, 32 supplemental items, catalog/parts, Quiz A and B result paths, paired scoring in both orders, retake history, empty/non-empty chart rendering. DOM is stubbed; Browser visual verification is not included.');
