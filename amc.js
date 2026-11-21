// AMC keeps the shared reading, vocabulary, score history and mistake store.
function amcCatalog() {
  app.innerHTML = `<a class="back" href="#home">← 所有教材</a><section class="catalog-head"><p class="eyebrow">AMC English</p><h1>AMC課程</h1><p>閱讀、單字及片語、例句四選一、課文聽力理解。</p></section><section class="unit-grid">${amcUnits.map(u => `<article class="unit-card"><span class="tag">${esc(u.group)}</span><h2>${esc(u.title)}</h2><p>${esc(u.subtitle)}</p><p>${u.vocab.length} 個單字／片語 · ${u.listening.length} 題聽力</p><a class="primary" href="#unit/${esc(u.id)}">開始學習 →</a></article>`).join('')}</section>`;
}
function startAmcQuiz(part) {
  resetSavedAttempt();
  const questions = shuffle(part === 'a' ? activeUnit.vocabQuiz : activeUnit.listening).map(q => ({...q, choices: shuffle(q.choices)}));
  const test = {index: 0, correct: 0, questions};
  if (part === 'a') testA = test; else testB = test;
  showAmcQuiz(part);
}
function showAmcQuiz(part) {
  clearEnterNext();
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  const test = part === 'a' ? testA : testB, q = test.questions[test.index];
  if (!q) { test.completed = true; finishPair(part); return; }
  const listening = part === 'b', box = document.querySelector('#part-content');
  const supported = 'speechSynthesis' in window;
  box.innerHTML = `<div class="panel-head"><div><h2>${listening ? 'Part 4 · 課文聽力理解' : 'Part 3 · 單字及片語四選一'}</h2><p>${listening ? '先聽課文片段，再選出正確意思。可重播；作答後顯示原文與解析。' : '閱讀教材原例句，選出指定單字或片語在句中的意思。'}</p></div>${listening ? '<button class="secondary" id="amc-listen">▶ 播放／重播片段</button>' : ''}</div><p class="quiz-intro">第 ${test.index + 1} / ${test.questions.length} 題 · 題目與選項隨機排列</p>${listening ? `<p class="catalog-note">Browser Speech Synthesis 合成語音，非教材原音。${supported ? '' : '此 Browser 不支援朗讀，請改用支援 Speech Synthesis 的 Browser。'}</p><p id="amc-audio-status" role="status">請先播放片段，再作答。</p><p class="question">${esc(q.prompt)}</p>` : `<p class="blank-sentence">${esc(q.example)}</p><p class="question">「${esc(q.target)}」在這個例句中是什麼意思？</p>`}<div class="choices">${q.choices.map((choice, i) => `<button class="choice" data-amc-choice="${i}" ${listening ? 'disabled' : ''}><b>${'ABCD'[i]}.</b> ${esc(choice)}</button>`).join('')}</div><div id="amc-explanation"></div><div class="quiz-actions"><span id="amc-feedback" class="quiz-feedback">${listening ? '播放後即可選擇答案。' : '選擇答案後顯示解析。'}</span></div>`;
  if (listening) {
    const play = box.querySelector('#amc-listen'); play.disabled = !supported;
    play.onclick = () => {
      say(q.audio);
      box.querySelector('#amc-audio-status').textContent = '已送出播放；若沒有聲音，請檢查裝置音量及 Browser 的 English voice。';
      if (!q.answered) box.querySelectorAll('[data-amc-choice]').forEach(b => b.disabled = false);
    };
  }
  box.querySelectorAll('[data-amc-choice]').forEach(button => button.onclick = () => answerAmcQuiz(part, button));
}
function answerAmcQuiz(part, button) {
  const test = part === 'a' ? testA : testB, q = test.questions[test.index];
  if (q.answered || button.disabled) return;
  q.answered = true;
  const selected = q.choices[Number(button.dataset.amcChoice)], correct = selected === q.answer;
  if (correct) test.correct++;
  const box = document.querySelector('#part-content');
  box.querySelectorAll('[data-amc-choice]').forEach(b => {
    b.disabled = true;
    if (q.choices[Number(b.dataset.amcChoice)] === q.answer) b.classList.add('correct');
    else if (b === button) b.classList.add('wrong');
  });
  const question = part === 'a' ? `${q.example}\n「${q.target}」在句中是什麼意思？` : q.prompt;
  if (!correct) storeMistake({id:`amc:${activeUnit.id}:${part}:${(part === 'a' ? activeUnit.vocabQuiz : activeUnit.listening).findIndex(source => part === 'a' ? source.target === q.target && source.example === q.example : source.audio === q.audio)}`, ...readingCourse(), unit:activeUnit.title, kind:'choice', question, choices:q.choices, correct:q.answer, correctLabel:q.answer, audio:part === 'b' ? q.audio : undefined, explanation:q.explanation}, selected);
  box.querySelector('#amc-feedback').textContent = `${correct ? '答對了！' : '再練習一次就會更熟悉。'} 正確答案：${q.answer}`;
  box.querySelector('#amc-explanation').innerHTML = part === 'b' ? `<article class="reading"><h3>聽力原文與解析</h3><p class="english">${esc(q.audio)}</p><p>${esc(q.explanation)}</p><details><summary>查看這段課文的完整中英對照</summary><p>${esc(activeUnit.text[q.passage][0])}</p><p class="chinese">${esc(activeUnit.text[q.passage][1])}</p></details></article>` : `<p class="catalog-note">${esc(q.target)}：${esc(q.answer)}</p>`;
  const next = document.createElement('button'); next.className = 'secondary next-question'; next.textContent = test.index + 1 === test.questions.length ? '查看結果 →' : '下一題 →';
  next.onclick = () => { clearEnterNext(); test.index++; showAmcQuiz(part); };
  box.querySelector('.quiz-actions').append(next); armEnterNext(next.onclick);
}
