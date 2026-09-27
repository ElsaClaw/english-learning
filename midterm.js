const MIDTERM_STORE = 'english-path-midterm-v1';
let midtermAttempt = null;
function examShuffle(items) {
  const result = [...items];
  for (let i=result.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [result[i],result[j]]=[result[j],result[i]]; }
  return result;
}
function examRecords() { try { const r=JSON.parse(localStorage.getItem(MIDTERM_STORE)||'[]'); return Array.isArray(r)?r:[]; } catch { return []; } }
function midtermCatalog() {
  const history=examRecords();
  app.innerHTML=`<a class="back" href="#home">← 所有教材</a><section class="catalog-head"><p class="eyebrow">First Midterm · Practice</p><h1>第一次段考</h1><p>範圍涵蓋八年級英文課文 6 個 Unit 與字彙字識 8 個 Unit。三份試卷共 150 題全新情境句，每份都涵蓋全部單元。</p><p>每份 50 題：克漏字 20 題＋四選一 30 題，每題 2 分。三份題目不同，重考時重新打亂題序與選項。交卷後才顯示答案。</p></section><section class="unit-grid">${midtermPapers.map(p=>`<article class="unit-card"><span class="tag">50 題 · 100 分</span><h2>${esc(p.title)}</h2><p>課文單字克漏字 20 題<br>字彙字識選擇 30 題</p><button class="primary" data-exam="${p.id}">開始作答 →</button></article>`).join('')}</section><section class="exam-history"><h2>段考練習紀錄</h2><p>紀錄僅儲存於目前 Browser。作答期間可返回上一題；離開或重新整理前請先交卷。</p>${history.length?history.slice().reverse().map(r=>`<p>${esc(r.title)} · ${esc(new Date(r.date).toLocaleString('zh-TW'))} · <strong>${r.score} 分</strong>（克漏字 ${r.reading}/20，選擇 ${r.choice}/30）</p>`).join(''):'<p>還沒有交卷紀錄，選一份開始吧！</p>'}</section>`;
  app.querySelectorAll('[data-exam]').forEach(b=>b.onclick=()=>{const p=midtermPapers.find(p=>p.id===b.dataset.exam);midtermAttempt={paper:p,index:0,answers:{},questions:['reading','choice'].flatMap(type=>examShuffle(p.questions.filter(q=>q.type===type)).map(q=>({...q,choices:q.choices?examShuffle(q.choices):null})))};setRoute('#midterm/test');});
}
function midtermPage(part) { if(part==='test'&&midtermAttempt) midtermQuestion(); else midtermCatalog(); }
function midtermQuestion() {
  clearEnterNext();const a=midtermAttempt,q=a.questions[a.index];
  const answered=Object.values(a.answers).filter(v=>String(v).trim()).length;
  const hint=q.answer.split(' ').map(w=>w.length>2?w[0]+'＿'.repeat(w.length-2)+w.at(-1):'＿'.repeat(w.length)).join(' ');
  app.innerHTML=`<section class="exam-shell"><p class="eyebrow">${esc(a.paper.title)} · ${q.type==='reading'?'第一部分：克漏字':'第二部分：選擇題'}</p><h1>第 ${a.index+1} / 50 題</h1><p>已作答 ${answered} 題 · 每題 2 分</p><progress value="${answered}" max="50" aria-label="已作答題數"></progress><form id="exam-form"><h2 class="exam-sentence">${esc(q.prompt)}</h2>${q.type==='reading'?`<p>提示：${esc(q.meaning)} · ${esc(hint)}</p><label for="exam-answer">請輸入完整單字或片語（不分大小寫）</label><input id="exam-answer" autocomplete="off" autocapitalize="off" spellcheck="false" value="${esc(a.answers[q.id]||'')}">`:`<fieldset class="exam-options"><legend>選出最符合句意的單字</legend>${q.choices.map((v,i)=>`<label><input type="radio" name="answer" value="${esc(v)}" ${a.answers[q.id]===v?'checked':''}> <span>${String.fromCharCode(65+i)}. ${esc(v)}</span></label>`).join('')}</fieldset>`}<div class="exam-actions"><button type="button" id="exam-prev" ${a.index===0?'disabled':''}>← 上一題</button><button type="submit" class="primary">${a.index===49?'檢查並交卷':'下一題 →'}</button></div></form><details><summary>題號導覽（可跳題）</summary><div class="exam-numbers">${a.questions.map((v,i)=>`<button aria-label="第 ${i+1} 題${a.answers[v.id]?'，已作答':''}" ${i===a.index?'aria-current="step"':''} data-jump="${i}">${i+1}${a.answers[v.id]?' ✓':''}</button>`).join('')}</div></details></section>`;
  const persist=()=>{a.answers[q.id]=q.type==='reading'?app.querySelector('#exam-answer').value:app.querySelector('input[name="answer"]:checked')?.value||'';};
  app.querySelector('#exam-form').oninput=persist;
  app.querySelector('#exam-prev').onclick=()=>{persist();a.index--;midtermQuestion();};
  app.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{persist();a.index=Number(b.dataset.jump);midtermQuestion();});
  app.querySelector('#exam-form').onsubmit=e=>{e.preventDefault();persist();if(a.index<49){a.index++;midtermQuestion();}else midtermReviewSubmit();};
  window.scrollTo(0,0);app.querySelector(q.type==='reading'?'#exam-answer':'input[name="answer"]')?.focus({preventScroll:true});
}
function midtermReviewSubmit() {
  const a=midtermAttempt,missing=a.questions.filter(q=>!String(a.answers[q.id]||'').trim());
  app.innerHTML=`<section class="exam-shell"><h1>準備交卷</h1><p>已作答 ${50-missing.length} / 50 題。${missing.length?`尚有 ${missing.length} 題未作答，交卷後以答錯計算。`:'全部完成！交卷後查看分數與解析。'}</p><div class="exam-actions"><button id="exam-return">返回檢查</button><button id="exam-submit" class="primary">確認交卷</button></div></section>`;
  app.querySelector('#exam-return').onclick=()=>{if(missing.length)a.index=a.questions.indexOf(missing[0]);midtermQuestion();};
  app.querySelector('#exam-submit').onclick=midtermResult;
}
function examNormalize(value) { return String(value||'').normalize('NFKC').toLowerCase().trim().replace(/[’‘]/g,"'").replace(/\s+/g,' '); }
function midtermResult() {
  const a=midtermAttempt;if(!a)return;
  const results=a.questions.map(q=>({...q,given:a.answers[q.id]||'',correct:examNormalize(a.answers[q.id])===examNormalize(q.answer)}));
  const reading=results.filter(q=>q.type==='reading'&&q.correct).length,choice=results.filter(q=>q.type==='choice'&&q.correct).length;
  const score=(reading+choice)*2;let saved=true;
  try {const history=examRecords();history.push({title:a.paper.title,paperId:a.paper.id,date:new Date().toISOString(),score,reading,choice});localStorage.setItem(MIDTERM_STORE,JSON.stringify(history));}catch{saved=false;}
  midtermAttempt=null;
  app.innerHTML=`<a class="back" href="#midterm">← 第一次段考</a><section class="catalog-head"><p class="eyebrow">${esc(a.paper.title)} · Result</p><h1>${score} 分</h1><p>克漏字 ${reading}/20 · 選擇 ${choice}/30</p><p>${saved?'此次成績已儲存在目前 Browser。':'Browser 無法儲存此次成績；請先記下分數。'}</p></section><section>${results.map((q,i)=>`<article class="exam-answer-card ${q.correct?'is-correct':'is-wrong'}"><h2>${i+1}. ${q.correct?'✓ 答對':'訂正'}</h2><p>${esc(q.prompt)}</p><p>你的答案：${esc(q.given||'未作答')} · 正確答案：<strong>${esc(q.answer)}</strong></p><p>${esc(q.explanation)}</p><small>單字來源：${esc(q.sourceTitle)}</small></article>`).join('')}</section>`;window.scrollTo(0,0);
}
