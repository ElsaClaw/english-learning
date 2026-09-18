const app = document.querySelector('#app');
const STORE_KEY = 'english-path-score-history-v1';
let activeUnit = null;
let activePart = 'read';
let testA = null;
let testB = null;

function esc(value) { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function shuffle(items) { return [...items].sort(() => Math.random() - .5); }
function scores() { try { return JSON.parse(localStorage.getItem(STORE_KEY) || '[]'); } catch { return []; } }
function saveScore(item) { const all = scores(); all.push(item); localStorage.setItem(STORE_KEY, JSON.stringify(all)); }
function unitById(id) { return units.find(unit => unit.id === id); }
let availableVoices = [];
function refreshVoices() { availableVoices = speechSynthesis.getVoices(); }
function preferredEnglishVoice() {
  const preferredNames = ['samantha', 'ava', 'allison', 'zoe', 'daniel'];
  const englishUS = availableVoices.filter(voice => voice.lang.toLowerCase().startsWith('en-us'));
  return englishUS.find(voice => preferredNames.some(name => voice.name.toLowerCase().includes(name)))
    || englishUS.find(voice => /enhanced|premium|siri/i.test(voice.name))
    || englishUS[0]
    || availableVoices.find(voice => voice.lang.toLowerCase().startsWith('en-'));
}
if ('speechSynthesis' in window) { refreshVoices(); speechSynthesis.addEventListener('voiceschanged', refreshVoices); }
function say(text) {
  if (!('speechSynthesis' in window)) { alert('此瀏覽器不支援朗讀功能。'); return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = preferredEnglishVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || 'en-US'; utterance.rate = .82; utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}
function setRoute(hash) { location.hash = hash; }
function allMeanings() { return [...new Set(units.flatMap(u => u.vocab.map(v => v[2])))]; }

function home() {
  activeUnit = null;
  const recent = scores().slice(-1)[0];
  app.innerHTML = `
    <section class="hero" id="home">
      <div><p class="eyebrow">Independent Learning</p><h1>選擇教材，<br>建立自己的英文路徑。</h1><p>從課文閱讀或字彙練習開始；每套教材各自保有適合的學習與測驗方式。</p></div>
      <aside class="hero-note"><strong>今日的小目標</strong>選擇一套教材，再挑選要練習的 Unit。${recent ? `<br><br>最近課文紀錄：${esc(recent.title)} · ${recent.total}%` : ''}</aside>
    </section>
    <section class="book-grid"><article class="book-card"><span class="tag">Reading · Grade 8</span><h2>八年級英文課文</h2><p>中英對照閱讀、核心單字、英文朗讀與兩種測驗學習路徑。</p><button class="primary" data-course="reading">進入課文 Units →</button></article><article class="book-card vocab-book"><span class="tag">Vocabulary</span><h2>字彙字識</h2><p>單字庫、例句朗讀與隨機四選一克漏字測驗；課程會持續增加。</p><button class="primary" data-course="vocab">進入字彙單元 →</button></article></section>`;
  app.querySelectorAll('[data-course]').forEach(button => button.onclick = () => setRoute(`#${button.dataset.course}`));
}

function readingCatalog() {
  app.innerHTML = `<a class="back" href="#home">← 所有教材</a><section class="catalog-head"><p class="eyebrow">Reading · Grade 8</p><h1>八年級英文課文</h1><p>選擇一個 Unit，依序完成閱讀、單字庫、測驗 A 與測驗 B。</p></section><section class="unit-grid">${units.map(u => `<article class="unit-card"><span class="tag">${esc(u.group)} · ${u.vocab.length} words</span><h2>${esc(u.title)}</h2><p>${esc(u.subtitle)}</p><button class="primary" data-open="${u.id}">開始學習 →</button></article>`).join('')}</section>`;
  app.querySelectorAll('[data-open]').forEach(button => button.onclick = () => setRoute(`#unit/${button.dataset.open}`));
}

function zhishiCatalog() {
  const lessons = [vocabZhishi];
  app.innerHTML = `<a class="back" href="#home">← 所有教材</a><section class="catalog-head"><p class="eyebrow">Vocabulary · 字彙字識</p><h1>字彙字識</h1><p>選擇一個單元，先從單字庫複習，再進行例句克漏字測驗。</p></section><section class="unit-grid">${lessons.map(item => `<article class="unit-card vocab-unit-card"><span class="tag">Vocabulary</span><h2>${esc(item.title)}</h2><p>${esc(item.subtitle)}<br>${item.records.length} 個詞義／例句項目</p><button class="primary" data-vocab-unit="${esc(item.id)}">開始學習 →</button></article>`).join('')}</section><p class="catalog-note">新的字彙字識單元將會陸續加入這個列表。</p>`;
  app.querySelectorAll('[data-vocab-unit]').forEach(button => button.onclick = () => setRoute(`#vocab/unit/${button.dataset.vocabUnit}`));
}

let zhishiTest = null;
function zhishi() {
  const lesson = vocabZhishi;
  app.innerHTML = `<a class="back" href="#vocab">← 字彙字識單元</a><section class="lesson-head"><p class="eyebrow">Vocabulary · 字彙字識</p><h1>${esc(lesson.title)}</h1><p>${esc(lesson.subtitle)}</p><span class="progress-pill">${lesson.records.length} 個詞義／例句學習項目</span></section><div class="parts"><button class="part-tab active" data-zhishi-part="bank">Part 1 · 單字庫</button><button class="part-tab" data-zhishi-part="quiz">Part 2 · 測驗</button></div><section class="panel" id="zhishi-content"></section>`;
  app.querySelectorAll('[data-zhishi-part]').forEach(button => button.onclick = () => renderZhishi(button.dataset.zhishiPart));
  renderZhishi('bank');
}
function renderZhishi(part) {
  document.querySelectorAll('[data-zhishi-part]').forEach(button => button.classList.toggle('active', button.dataset.zhishiPart === part));
  const box = document.querySelector('#zhishi-content'); if (!box) return;
  if (part === 'bank') {
    box.innerHTML = `<div class="panel-head"><div><h2>單字庫</h2><p>依詞義與例句分列；同一單字有不同意思時，會保留為不同學習項目。</p></div></div><div class="vocab-grid">${vocabZhishi.records.map((v, index) => `<article class="word-card zhishi-word"><h3>${esc(v.word)}<span class="pos">${esc(v.pos)}</span></h3><p class="phonetic">${esc(v.phonetic)}</p><p class="meaning">${esc(v.meaning)}</p><p class="example">“${esc(v.example)}”</p><p class="translation">${esc(v.translation)}</p><button class="ghost" data-zhishi-speak="${index}">▶ 朗讀例句</button></article>`).join('')}</div>`;
    box.querySelectorAll('[data-zhishi-speak]').forEach(button => button.onclick = () => say(vocabZhishi.records[button.dataset.zhishiSpeak].example));
  } else startZhishiQuiz();
}
function zhishiQuestion(v) {
  const answers = [...new Set(vocabZhishi.records.map(item => item.word.toLowerCase()))];
  const distractors = shuffle(answers.filter(word => word !== v.word.toLowerCase())).slice(0, 3);
  return { v, choices: shuffle([v.word.toLowerCase(), ...distractors]) };
}
function startZhishiQuiz() { zhishiTest = { index: 0, correct: 0, questions: shuffle(vocabZhishi.records).map(zhishiQuestion) }; showZhishiQuiz(); }
function showZhishiQuiz() {
  const box = document.querySelector('#zhishi-content'), q = zhishiTest.questions[zhishiTest.index];
  if (!q) return finishZhishiQuiz();
  const pattern = new RegExp(q.v.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  const sentence = q.v.example.replace(pattern, '<mark>' + '_'.repeat(q.v.word.length) + '</mark>');
  box.innerHTML = `<div class="panel-head"><div><h2>測驗 · 例句克漏字</h2><p>從本單元的四個英文單字中，選出最適合填入例句的答案。</p></div><button class="secondary" id="speak-zhishi-example">🔊 朗讀例句</button></div><div class="quiz-intro">作答進度 ${zhishiTest.index + 1} / ${zhishiTest.questions.length} · 題目與選項每次皆隨機排列</div><div class="question-num">Question ${zhishiTest.index + 1}</div><p class="blank-sentence">${sentence}</p><div class="choices">${q.choices.map((choice, index) => `<button class="choice" data-zhishi-choice="${esc(choice)}"><b>${'ABCD'[index]}.</b> ${esc(choice)}</button>`).join('')}</div><div class="quiz-actions"><span class="quiz-feedback" id="zhishi-feedback">選擇答案後會顯示結果。</span><span>${zhishiTest.correct} 題答對</span></div>`;
  box.querySelector('#speak-zhishi-example').onclick = () => say(q.v.example);
  box.querySelectorAll('[data-zhishi-choice]').forEach(button => button.onclick = () => answerZhishi(button, q));
}
function answerZhishi(button, q) {
  const buttons = document.querySelectorAll('[data-zhishi-choice]'); buttons.forEach(item => item.disabled = true);
  const correct = button.dataset.zhishiChoice === q.v.word.toLowerCase();
  if (correct) { zhishiTest.correct++; button.classList.add('correct'); document.querySelector('#zhishi-feedback').textContent = '答對了！'; }
  else { button.classList.add('wrong'); [...buttons].find(item => item.dataset.zhishiChoice === q.v.word.toLowerCase()).classList.add('correct'); document.querySelector('#zhishi-feedback').textContent = `正確答案是「${q.v.word}」。`; }
  setTimeout(() => { zhishiTest.index++; showZhishiQuiz(); }, 900);
}
function finishZhishiQuiz() {
  const total = zhishiTest.questions.length, percent = Math.round(zhishiTest.correct / total * 100);
  localStorage.setItem('vocab-zhishi-3-1-last-score', JSON.stringify({ correct: zhishiTest.correct, total, percent, date: new Date().toISOString() }));
  document.querySelector('#zhishi-content').innerHTML = `<div class="result"><p class="eyebrow">Vocabulary review</p><h2>測驗完成</h2><div class="score-number">${percent}<small style="font-size:1.25rem"> 分</small></div><p class="score-label">答對 ${zhishiTest.correct} / ${total} 題。可以再次測驗，題目與 ABCD 選項將重新隨機排列。</p><button class="primary" id="retry-zhishi">重新測驗 →</button></div>`;
  document.querySelector('#retry-zhishi').onclick = startZhishiQuiz;
}

function lesson(id, wantedPart = 'read') {
  const unit = unitById(id); if (!unit) return home();
  activeUnit = unit; activePart = wantedPart; testA = null; testB = null;
  app.innerHTML = `
    <a class="back" href="#home">← 所有學習單元</a>
    <section class="lesson-head"><p class="eyebrow">${esc(unit.group)} · 學習單元</p><h1>${esc(unit.title)}</h1><p>${esc(unit.subtitle)}</p><span class="progress-pill">${unit.vocab.length} 個核心單字</span></section>
    <div class="parts">
      <button class="part-tab ${wantedPart === 'read' ? 'active':''}" data-part="read">Part 1 · 閱讀</button>
      <button class="part-tab ${wantedPart === 'vocab' ? 'active':''}" data-part="vocab">Part 2 · 單字庫</button>
      <button class="part-tab ${wantedPart === 'a' ? 'active':''}" data-part="a">Part 3 · 測驗 A</button>
      <button class="part-tab ${wantedPart === 'b' ? 'active':''}" data-part="b">Part 4 · 測驗 B</button>
    </div><section class="panel" id="part-content"></section>`;
  app.querySelectorAll('[data-part]').forEach(button => button.onclick = () => renderPart(button.dataset.part));
  renderPart(wantedPart);
}

function renderPart(part) {
  activePart = part;
  document.querySelectorAll('.part-tab').forEach(button => button.classList.toggle('active', button.dataset.part === part));
  const box = document.querySelector('#part-content'); if (!box || !activeUnit) return;
  if (part === 'read') {
    box.innerHTML = `<div class="panel-head"><div><h2>課文對照</h2><p>先讀英文，再參照繁體中文理解意思。</p></div><button class="secondary speak-btn" id="speak-all">🔊 朗讀完整課文</button></div>${activeUnit.text.map(([en, zh], index) => `<article class="reading"><p class="english">${esc(en)}</p><p class="chinese">${esc(zh)}</p><button class="ghost" data-sentence="${index}">▶ 朗讀這段</button></article>`).join('')}`;
    box.querySelector('#speak-all').onclick = () => say(activeUnit.text.map(t => t[0]).join(' '));
    box.querySelectorAll('[data-sentence]').forEach(btn => btn.onclick = () => say(activeUnit.text[btn.dataset.sentence][0]));
  } else if (part === 'vocab') {
    box.innerHTML = `<div class="panel-head"><div><h2>核心單字</h2><p>每個例句均取自本單元課文或教材例句。</p></div></div><div class="vocab-grid">${activeUnit.vocab.map((v, index) => `<article class="word-card"><h3>${esc(v[0])}<span class="pos">${esc(v[1])}</span></h3><p class="meaning">${esc(v[2])}</p><p class="example">“${esc(v[3])}”</p><button class="ghost" data-word="${index}">▶ 發音</button></article>`).join('')}</div>`;
    box.querySelectorAll('[data-word]').forEach(btn => btn.onclick = () => say(activeUnit.vocab[btn.dataset.word][0]));
  } else if (part === 'a') startTestA();
  else startTestB();
}

function startTestA() {
  testA = { index: 0, correct: 0, questions: shuffle(activeUnit.vocab).map(v => {
    const distractors = shuffle(allMeanings().filter(x => x !== v[2])).slice(0, 3);
    return { word: v[0], answer: v[2], choices: shuffle([v[2], ...distractors]) };
  }) };
  showTestA();
}
function showTestA() {
  const box = document.querySelector('#part-content'), q = testA.questions[testA.index];
  if (!q) return finishA();
  box.innerHTML = `<div class="panel-head"><div><h2>測驗 A · 詞義選擇</h2><p>聽英文單字，選出正確的繁體中文意思。</p></div><button class="secondary speak-btn" id="speak-word">🔊 朗讀單字</button></div><div class="quiz-intro">作答進度 ${testA.index + 1} / ${testA.questions.length} · 每題一分</div><div class="question-num">Question ${testA.index + 1}</div><div class="question">${esc(q.word)}</div><div class="choices">${q.choices.map(choice => `<button class="choice" data-choice="${esc(choice)}">${esc(choice)}</button>`).join('')}</div><div class="quiz-actions"><span class="quiz-feedback" id="feedback">按下選項後顯示答案</span><span>${testA.correct} 題答對</span></div>`;
  box.querySelector('#speak-word').onclick = () => say(q.word);
  say(q.word);
  box.querySelectorAll('[data-choice]').forEach(btn => btn.onclick = () => answerA(btn, q));
}
function answerA(button, q) {
  const buttons = document.querySelectorAll('.choice'); buttons.forEach(b => b.disabled = true);
  const correct = button.dataset.choice === q.answer;
  if (correct) { testA.correct++; button.classList.add('correct'); document.querySelector('#feedback').textContent = '答對了！很好。'; }
  else { button.classList.add('wrong'); [...buttons].find(b => b.dataset.choice === q.answer).classList.add('correct'); document.querySelector('#feedback').textContent = `正確答案是「${q.answer}」。`; }
  setTimeout(() => { testA.index++; showTestA(); }, 1000);
}
function finishA() {
  const percent = Math.round(testA.correct / testA.questions.length * 100);
  document.querySelector('#part-content').innerHTML = resultHTML('測驗 A 完成', percent, `${testA.correct} / ${testA.questions.length} 題答對`, '前往測驗 B →', 'b');
  document.querySelector('[data-next]').onclick = () => renderPart('b');
}

function masked(word) {
  const letters = [...word]; const positions = letters.map((x, i) => /[a-z]/i.test(x) ? i : -1).filter(i => i >= 0);
  if (positions.length < 3) return word[0] + '_';
  const first = positions[0], last = positions.at(-1);
  return letters.map((x, i) => (i === first || i === last || !/[a-z]/i.test(x)) ? x : '_').join('');
}
function startTestB() { testB = { index: 0, correct: 0, questions: shuffle(activeUnit.vocab).map(v => ({ word:v[0], sentence:v[3] })) }; showTestB(); }
function showTestB() {
  const box = document.querySelector('#part-content'), q = testB.questions[testB.index];
  if (!q) return finishB();
  const pattern = new RegExp(q.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  const sentence = q.sentence.replace(pattern, `<mark>${masked(q.word)}</mark>`);
  box.innerHTML = `<div class="panel-head"><div><h2>測驗 B · 克漏字</h2><p>依例句填入單字；保留第一與最後一個英文字母作為提示。</p></div></div><div class="quiz-intro">作答進度 ${testB.index + 1} / ${testB.questions.length} · 不分大小寫作答</div><div class="question-num">Question ${testB.index + 1}</div><p class="blank-sentence">${sentence}</p><div class="answer-form"><input id="blank-answer" autocomplete="off" placeholder="輸入完整英文單字或片語" aria-label="答案" /><button class="primary" id="check-answer">確認答案</button></div><div class="quiz-actions"><span class="quiz-feedback" id="feedback">提示：${esc(masked(q.word))}</span><span>${testB.correct} 題答對</span></div>`;
  const check = () => answerB(q); box.querySelector('#check-answer').onclick = check;
  box.querySelector('#blank-answer').addEventListener('keydown', e => { if(e.key === 'Enter') check(); });
  box.querySelector('#blank-answer').focus();
}
function normalize(str) { return str.toLowerCase().replace(/[^a-z]/g, ''); }
function answerB(q) {
  const input = document.querySelector('#blank-answer'), button = document.querySelector('#check-answer'); if (button.disabled) return;
  const correct = normalize(input.value) === normalize(q.word); button.disabled = true; input.disabled = true;
  if (correct) { testB.correct++; input.style.borderColor = '#53a16d'; document.querySelector('#feedback').textContent = '答對了！很好。'; }
  else { input.style.borderColor = '#cd706b'; document.querySelector('#feedback').textContent = `正確答案：${q.word}`; }
  setTimeout(() => { testB.index++; showTestB(); }, 1100);
}
function finishB() {
  const percent = Math.round(testB.correct / testB.questions.length * 100);
  const aPercent = testA ? Math.round(testA.correct / testA.questions.length * 100) : null;
  if (aPercent !== null) {
    const total = Math.round((aPercent + percent) / 2);
    saveScore({ unit: activeUnit.id, title: activeUnit.group + ' · ' + activeUnit.title, a:aPercent, b:percent, total, date:new Date().toISOString() });
    document.querySelector('#part-content').innerHTML = resultHTML('本單元測驗完成', total, `測驗 A：${aPercent} 分　·　測驗 B：${percent} 分`, '查看學習紀錄 →', 'progress', true);
  } else {
    document.querySelector('#part-content').innerHTML = resultHTML('測驗 B 完成', percent, `${testB.correct} / ${testB.questions.length} 題答對。請再完成測驗 A，才能寫入單元總分。`, '前往測驗 A →', 'a');
  }
  document.querySelector('[data-next]').onclick = () => setRoute(document.querySelector('[data-next]').dataset.next === 'progress' ? '#progress' : `#unit/${activeUnit.id}/${document.querySelector('[data-next]').dataset.next}`);
}
function resultHTML(title, score, detail, label, next) { return `<div class="result"><p class="eyebrow">學習回饋</p><h2>${title}</h2><div class="score-number">${score}<small style="font-size:1.25rem"> 分</small></div><p class="score-label">${detail}</p><button class="primary" data-next="${next}">${label}</button></div>`; }

function progress() {
  const data = scores();
  app.innerHTML = `<a class="back" href="#home">← 所有學習單元</a><section class="panel" id="progress"><div class="history-top"><div><p class="eyebrow">Learning record</p><h2>所有考試成績</h2><p style="color:var(--muted);margin:.2rem 0 0">每次完整完成 A、B 測驗後，系統會記錄兩者平均總分。</p></div><button class="secondary" id="clear-history">清除本機紀錄</button></div>${data.length ? `<div class="chart-box"><canvas id="score-chart" aria-label="考試成績曲線圖"></canvas></div><div class="history-list">${[...data].reverse().map(item => `<article class="history-card"><strong>${esc(item.title)}</strong><span>${new Date(item.date).toLocaleString('zh-TW', {dateStyle:'medium', timeStyle:'short'})}</span><div class="score">總分 ${item.total}</div><span>A ${item.a} · B ${item.b}</span></article>`).join('')}</div>` : `<div class="empty">尚未有完整的單元測驗紀錄。<br>完成同一單元的測驗 A 和 B 後，成績會顯示在這裡。</div>`}</section>`;
  const clear = document.querySelector('#clear-history'); clear.onclick = () => { if(confirm('確定要清除這台裝置上的所有學習紀錄嗎？')) { localStorage.removeItem(STORE_KEY); progress(); } };
  if (data.length) drawChart(data);
}
function drawChart(data) {
  const canvas = document.querySelector('#score-chart'), ctx = canvas.getContext('2d'); const rect = canvas.getBoundingClientRect(), ratio = devicePixelRatio || 1;
  canvas.width = rect.width * ratio; canvas.height = rect.height * ratio; ctx.scale(ratio, ratio); const w=rect.width,h=rect.height,p={l:40,r:16,t:20,b:40};
  ctx.clearRect(0,0,w,h); ctx.font='12px DM Sans, sans-serif';
  for(let v=0;v<=100;v+=25){const y=p.t+(100-v)/100*(h-p.t-p.b);ctx.strokeStyle='#e2e8e7';ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(w-p.r,y);ctx.stroke();ctx.fillStyle='#7b8b92';ctx.fillText(v,y? p.l-27:0,y+4);}
  const points=data.map((d,i)=>({x:data.length===1?(p.l+w-p.r)/2:p.l+i*(w-p.l-p.r)/(data.length-1),y:p.t+(100-d.total)/100*(h-p.t-p.b),d}));
  ctx.strokeStyle='#2275a8';ctx.lineWidth=3;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();points.forEach((p,i)=>{ctx.fillStyle='#fffdfa';ctx.beginPath();ctx.arc(p.x,p.y,5,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#2275a8';ctx.lineWidth=3;ctx.stroke();ctx.fillStyle='#53636e';ctx.textAlign='center';ctx.fillText(p.d.unit.toUpperCase(),p.x,h-15);});
}
function router() { const route = location.hash.slice(1) || 'home'; const parts=route.split('/'); if(parts[0] === 'unit') lesson(parts[1], parts[2] || 'read'); else if(parts[0] === 'reading') readingCatalog(); else if(parts[0] === 'vocab' && parts[1] === 'unit' && parts[2] === vocabZhishi.id) zhishi(); else if(parts[0] === 'vocab') zhishiCatalog(); else if(parts[0] === 'progress') progress(); else home(); }
window.addEventListener('hashchange', router); window.addEventListener('resize', () => { if(location.hash === '#progress' && scores().length) drawChart(scores()); }); router();
