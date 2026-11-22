// Share the established question/scoring engine; distinguish papers and histories by stable IDs.
function secondMidtermPage(part) {
  if (part==='test' && midtermAttempt?.paper.id.startsWith('second-midterm-')) { midtermQuestion(); return; }
  const history=examRecords().filter(r=>r.paperId?.startsWith('second-midterm-'));
  app.innerHTML=`<a class="back" href="#home">← 所有教材</a><section class="catalog-head"><p class="eyebrow">Second Midterm · Practice</p><h1>第二次段考</h1>
    <p>課文範圍：八年級英文課文 Unit 4.1、4.2、5.1、5.2。模擬考 1、2 為 37、36 題克漏字，完整涵蓋 73 個不同單字／片語（identify 在兩課出現，合併計算）。</p>
    <p>字彙範圍：字彙字識 3-3、4-1、4-2、4-3、5、6-1、6-2、6-3。模擬考 3～6 為 107、107、107、106 題選擇題，涵蓋全部 427 個不同考詞。每個考詞選取一個課程詞義命題，不代表測驗每個詞義。</p>
    <p>兩類試卷各自跨卷不重複考詞，合計 500 題。考詞固定分配，題序與選項隨機排列。題句皆非課程原例句；部分選擇題沿用既有模擬考題庫。</p>
    <p>克漏字只顯示作答形式的第一個與最後一個字母，不提供中文翻譯。片語請依句意填入完整形式（包含適當代名詞）。交卷後才顯示答案與解析。</p>
    <p>每題等權重，總分換算為 100 分並四捨五入至小數點後一位。離開或重新整理會失去尚未交卷的答案。</p></section>
    <section class="unit-grid">${secondMidtermPapers.map(p=>{const n=examCounts(p);return `<article class="unit-card"><span class="tag">${n.total} 題 · 100 分</span><h2>${esc(p.title)}</h2><p>${n.reading?'課文單字克漏字':'字彙字識四選一'} · ${n.total} 題</p><button class="primary" data-second-exam="${p.id}">開始作答 →</button></article>`;}).join('')}</section>
    <section class="exam-history"><h2>第二次段考練習紀錄</h2><p>紀錄僅儲存於目前 Browser。</p>${history.length?history.slice().reverse().map(r=>`<p>${esc(r.title)} · ${esc(new Date(r.date).toLocaleString('zh-TW'))} · <strong>${r.score} 分</strong>（${examScoreBreakdown(r.reading,r.choice,{reading:r.readingTotal,choice:r.choiceTotal})}）</p>`).join(''):'<p>還沒有交卷紀錄，選一份開始吧！</p>'}</section>`;
  app.querySelectorAll('[data-second-exam]').forEach(b=>b.onclick=()=>{
    const p=secondMidtermPapers.find(p=>p.id===b.dataset.secondExam);
    midtermAttempt={paper:p,index:0,answers:{},questions:examShuffle(p.questions).map(q=>({...q,choices:q.choices?examShuffle(q.choices):null}))};
    setRoute('#second-midterm/test');
  });
}
