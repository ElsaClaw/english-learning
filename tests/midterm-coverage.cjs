// Run from the project root: node tests/midterm-coverage.cjs
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c=vm.createContext({});vm.runInContext(['data.js','hanlin-data.js','vocab-data.js','midterm-data.js'].map(f=>fs.readFileSync(f,'utf8')).join('\n')+';globalThis.d={units,hanlinUnits,vocabUnits,midtermPapers}',c);
const {units,hanlinUnits,vocabUnits,midtermPapers}=JSON.parse(JSON.stringify(c.d));
const readingSources=[...units.filter(u=>['u1','u21','u22','u31','u32'].includes(u.id)),...hanlinUnits.filter(u=>u.id==='hanlin-3a-u4')];
const expectedReading=new Set(readingSources.flatMap(u=>u.vocab.map(v=>v[0]))),expectedChoice=new Set(vocabUnits.flatMap(u=>u.records.map(v=>v.word)));
const papers=midtermPapers.slice(4),reading=papers.slice(0,2),choice=papers.slice(2);
assert.equal(midtermPapers.length,10);assert.deepEqual(papers.map(p=>p.questions.length),[50,50,105,105,105,102]);
function words(ps){return ps.flatMap(p=>p.questions.map(q=>q.word));}
assert.deepEqual(new Set(words(reading)),expectedReading);assert.deepEqual(new Set(words(choice)),expectedChoice);
assert.equal(expectedReading.size,98);assert.equal(expectedChoice.size,417);assert.equal(words(choice).length,417);
const overlap=reading[0].questions.filter(q=>reading[1].questions.some(v=>v.word===q.word));assert.equal(overlap.length,2);
assert.deepEqual(new Set(overlap.map(q=>q.word)),new Set(['brain','wallet']));
const ids=new Set(),prompts=new Set(),examples=new Set([...readingSources.flatMap(u=>u.vocab.map(v=>v[3])),...vocabUnits.flatMap(u=>u.records.map(v=>v.example))]);
const allowed=new Set(vocabUnits.flatMap(u=>u.records.flatMap(v=>v.word.split(' / '))));for(const w of [...allowed]){allowed.add(w+'s');allowed.add(w.replace(/y$/,'ies'));}allowed.add('afterward');allowed.add('afterwards');
for(const p of papers){assert.equal(new Set(p.questions.map(q=>q.word)).size,p.questions.length);const type=reading.includes(p)?'reading':'choice';for(const q of p.questions){assert.equal(q.type,type);assert(!ids.has(q.id),'duplicate id '+q.id);ids.add(q.id);assert(!prompts.has(q.prompt),'duplicate prompt '+q.word);prompts.add(q.prompt);assert(/[.?]$/.test(q.prompt));assert(!examples.has(q.prompt.replace('_____',q.answer)),'source example reused '+q.word);if(type==='reading'){assert(readingSources.find(u=>u.id===q.sourceId)?.vocab.some(v=>v[0]===q.word));assert.equal(q.prompt.split('_____').length,q.word==='not ... anymore'?3:2);}else{assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(q.choices.includes(q.answer));for(const option of q.choices)assert(allowed.has(option),'unknown option '+option);assert(vocabUnits.find(u=>u.id===q.sourceId)?.records.some(v=>v.id===q.sourceRecordId&&v.word===q.word&&v.meaning===q.meaning),'source sense '+q.word);}}}
console.log('PASS: 50/50 cloze cover 98 headwords with exactly 2 overlaps; 105/105/105/102 choices cover 417 without repeats; 517 unique prompts, valid sources/options.');
