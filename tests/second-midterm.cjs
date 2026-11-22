const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c=vm.createContext({});vm.runInContext(['data.js','vocab-data.js','second-midterm-data.js','midterm.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n')+';this.d={units,vocabUnits,secondMidtermPapers,examAnswerCorrect,examHint}',c);
const {units,vocabUnits,secondMidtermPapers:papers,examAnswerCorrect,examHint}=c.d;
const rus=units.filter(u=>['u4','u42','u51','u52'].includes(u.id)),vus=vocabUnits.filter(u=>['3-3','4-1','4-2','4-3','5','6-1','6-2','6-3'].some(s=>u.id==='vocab-zhishi-'+s));
const expectedR=new Set(rus.flatMap(u=>u.vocab.map(v=>v[0]))),expectedC=new Set(vus.flatMap(u=>u.records.filter(r=>!r.supplement).map(r=>r.word)));
const all=papers.flatMap(p=>p.questions),reading=all.filter(q=>q.type==='reading'),choice=all.filter(q=>q.type==='choice');
assert.deepEqual(Array.from(papers,p=>p.questions.length),[37,36,80,88,85,80]);
assert.equal(expectedR.size,73);assert.equal(expectedC.size,333);
assert.deepEqual(new Set(reading.map(q=>q.word)),expectedR);assert.deepEqual(new Set(choice.map(q=>q.word)),expectedC);
assert.equal(reading.length,73);assert.equal(choice.length,333);assert.equal(new Set(all.map(q=>q.id)).size,406);assert.equal(new Set(all.map(q=>q.prompt)).size,406);
const examples=new Set([...rus.flatMap(u=>u.vocab.map(v=>v[3])),...vus.flatMap(u=>u.records.map(r=>r.example))].map(s=>s.toLowerCase()));
const options=new Set(vus.flatMap(u=>u.records.filter(r=>!r.supplement).flatMap(r=>r.word.split(' / '))));
options.add('afterward');options.add('afterwards');
assert(papers.slice(2).every(p=>p.id.endsWith('-core-v2')));
for(const q of all){
 assert.equal(q.prompt.split('_____').length,2,q.word);assert(/[.?!]["”]?$/.test(q.prompt),q.word);
 assert(!examples.has(q.prompt.replace('_____',q.answer).toLowerCase()),'source example reused '+q.word);
 assert(examAnswerCorrect(q,'  '+q.answer.toUpperCase()+'  '));assert(!examAnswerCorrect(q,''));
 if(q.type==='reading'){
  assert(rus.find(u=>u.id===q.sourceId)?.vocab.some(v=>v[0]===q.word));
  const letters=examHint(q.answer,true).match(/[a-z]/gi)||[];assert.equal(letters.length,2,q.word);
 }else{
  assert(vus.find(u=>u.id===q.sourceId)?.records.some(r=>!r.supplement&&r.id===q.sourceRecordId&&r.word===q.word&&r.meaning===q.meaning),'source '+q.word);
  assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4,q.word);assert(q.choices.includes(q.answer));
  for(const w of q.choices)assert(options.has(w),'option '+w);
 }
}
console.log('PASS: 73 cloze + 333 choice targets, exact scope, no repeats, 406 unique non-source prompts, valid source senses, hints and answers.');
