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
function say(text) {
  if (!('speechSynthesis' in window)) { alert('此瀏覽器不支援朗讀功能。'); return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US'; utterance.rate = .88; utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}
function setRoute(hash) { location.hash = hash; }
function allMeanings() { return [...new Set(units.flatMap(u => u.vocab.map(v => v[2])))]; }

function home() {
  activeUnit = null;
  const recent = scores().slice(-1)[0];
  app.innerHTML = `
    <section class="hero" id="home">
      <div><p class="eyebrow">Grade 8 · Independent Learning</p><h1>讓每一篇英文課文，<br>成為自己的路徑。</h1><p>閱讀中英對照、聆聽自然朗讀、掌握課內單字，再用兩種測驗檢查記憶。所有 Unit 成績都會留在這台裝置上。</p></div>
      <aside class="hero-note"><strong>今日的小目標</strong>選一個單元完成學習，再進行單字選擇與克漏字測驗。${recent ? `<br><br>最近紀錄：${esc(recent.title)} · ${recent.total}%` : ''}</aside>
    </section>
    <section class="unit-grid">${units.map(u => `<article class="unit-card"><span class="tag">${esc(u.group)} · ${u.vocab.length} words</span><h2>${esc(u.title)}</h2><p>${esc(u.subtitle)}</p><button class="primary" data-open="${u.id}">開始學習 →</button></article>`).join('')}</section>`;
  app.querySelectorAll('[data-open]').forEach(button => button.onclick = () => setRoute(`#unit/${button.dataset.open}`));
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
function router() { const route = location.hash.slice(1) || 'home'; const parts=route.split('/'); if(parts[0] === 'unit') lesson(parts[1], parts[2] || 'read'); else if(parts[0] === 'progress') progress(); else home(); }
window.addEventListener('hashchange', router); window.addEventListener('resize', () => { if(location.hash === '#progress' && scores().length) drawChart(scores()); }); router();
