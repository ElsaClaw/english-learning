// A separate, resumable learning mode; existing full-Unit scores remain independent.
const GARDEN_KEY = 'english-path-garden-v1';
const gardenPets = [
  {name:'芽芽', english:'Sprout', color:'#95cbb0', detail:'像小芽一樣，每天長大一點點。', icon:'🌱'},
  {name:'泡泡', english:'Bubble', color:'#9bcbdc', detail:'慢慢來，每一步都值得開心。', icon:'🫧'},
  {name:'暖暖', english:'Sunny', color:'#edc58d', detail:'帶著暖暖的勇氣，再試一次。', icon:'☀️'}
];
let gardenState;
function readGarden() {
  try {
    const s = JSON.parse(localStorage.getItem(GARDEN_KEY));
    if (s && Number.isInteger(s.pet) && gardenPets[s.pet] && Number.isInteger(s.energy) && s.energy >= 0) return s;
  } catch {}
  return {pet:null, energy:0, rounds:0, session:null};
}
function saveGarden() {
  try { localStorage.setItem(GARDEN_KEY, JSON.stringify(gardenState)); }
  catch { alert('目前無法儲存養成進度，請確認 Browser 的儲存空間與設定。'); }
}
function petArt(index, energy, small=false) {
  const pet = gardenPets[index], hatched = energy >= 30;
  return `<div class="pet-scene ${small?'pet-small':''}" style="--pet:${pet.color}" role="img" aria-label="${hatched?pet.name:'等待孵化的'+pet.name+'蛋'}"><span class="pet-spark spark-one">✦</span><span class="pet-spark spark-two">✧</span><div class="pet-body ${hatched?'hatched':'egg'} ${energy>=60?'grown':''}"><span class="pet-leaf">${pet.icon}</span><i class="pet-eye left"></i><i class="pet-eye right"></i><i class="pet-cheek left"></i><i class="pet-cheek right"></i><span class="pet-mouth">ᴗ</span></div><div class="pet-shadow"></div></div>`;
}
function gardenBanner() {
  return `<a class="garden-banner" href="#garden"><span class="garden-banner-icon">🥚</span><span><strong>來花園，陪一顆蛋慢慢長大</strong><small>10 題小任務 · 孵出你的英文小夥伴</small></span><span aria-hidden="true">→</span></a>`;
}
function gardenPage() {
  clearEnterNext(); window.scrollTo({top:0,behavior:"instant"}); gardenState = readGarden();
  app.innerHTML = `<a class="back" href="#vocab">← 字彙字識單元</a><section class="garden"><p class="eyebrow">Little steps, lovely friends</p><h1>夥伴花園</h1><p class="garden-intro">每天一點點英文，陪伴一個小生命長大。</p><div id="garden-content"></div><p class="catalog-note">養成進度只儲存在此 Browser，不會跨裝置同步。隨時休息，夥伴都會在這裡等你。</p></section>`;
  const box = document.querySelector('#garden-content');
  if (gardenState.pet === null) {
    box.innerHTML = `<h2>選一顆想照顧的蛋</h2><p>完成 3 回合小任務，就能和牠見面。</p><div class="egg-grid">${gardenPets.map((p,i)=>`<button class="egg-card" data-pet="${i}">${petArt(i,0)}<strong>${p.name} · ${p.english}</strong><span>${p.detail}</span><b>選擇這顆蛋 ♡</b></button>`).join('')}</div>`;
    box.querySelectorAll('[data-pet]').forEach(b=>b.onclick=()=>{gardenState.pet=Number(b.dataset.pet);saveGarden();gardenPage();}); return;
  }
  const p = gardenPets[gardenState.pet], e = gardenState.energy;
  const stage = e < 30 ? '等待孵化' : e < 60 ? '剛出生的小夥伴' : '開心成長的小夥伴';
  box.innerHTML = `<div class="garden-home"><div class="pet-home">${petArt(gardenState.pet,e)}<span class="tag">${stage}</span><h2>${p.name} <small>${p.english}</small></h2><p>${e<30?'蛋裡傳來輕輕的心跳聲。':'「謝謝你陪我學英文！」'}</p></div><div class="garden-mission"><span class="tag">一起累積的小成就</span><h2>${e<30?'再一點點，就能見面了':e<60?'一起長得更有精神':'每一次練習，都是新的成長'}</h2><p>${e<30?`距離孵化還有 ${30-e} 點愛心`:e<60?`距離成長還有 ${60-e} 點愛心`:`已累積 ${e} 點愛心，完成 ${gardenState.rounds} 回合`}</p><progress max="${e<30?30:60}" value="${Math.min(e,60)}" aria-label="夥伴成長進度"></progress><p>每回合 10 題，答錯可以看提示後訂正。完成一回合獲得 10 點愛心，不限時間。</p><label for="garden-unit">今天想探索哪個 Unit？</label><select id="garden-unit">${vocabUnits.map(u=>`<option value="${u.id}">${esc(u.title)}</option>`).join('')}</select><button class="primary" id="garden-start">${gardenState.session?'繼續上次的小任務 →':'開始今天的小任務 →'}</button>${gardenState.session?'<p class="garden-hint">會接著上次的 Unit 與題目，完成後可以再選其他 Unit。</p>':''}</div></div>`;
  if (gardenState.session) box.querySelector('#garden-unit').disabled=true;
  box.querySelector('#garden-start').onclick=()=>{
    if (!gardenState.session) {
      const unit = vocabUnits.find(u=>u.id===box.querySelector('#garden-unit').value);
      activeVocabUnit=unit;
      gardenState.session={unit:unit.id,index:0,firstCorrect:0,questions:shuffle(unit.records).slice(0,10).map(v=>({id:v.id,choices:zhishiQuestion(v).choices,wrong:false,done:false,selected:null}))}; saveGarden();
    }
    gardenQuestion();
  };
}
function gardenQuestion() {
  clearEnterNext();
  const s=gardenState.session, unit=vocabUnits.find(u=>u.id===s.unit);
  activeVocabUnit=unit;
  const q=s.questions[s.index], v=unit.records.find(v=>v.id===q.id);
  const box=document.querySelector('#garden-content');
  box.innerHTML=`<div class="garden-quiz panel"><div class="garden-quiz-top"><span>${esc(unit.title)} · ${s.index+1} / ${s.questions.length}</span><button class="ghost" id="garden-pause">先休息一下</button></div><progress max="${s.questions.length}" value="${s.index}" aria-label="小任務進度"></progress><h2>${q.done?'做得很好，一起往前走':q.wrong?'沒關係，看提示再試一次':'這句話，少了哪個單字？'}</h2><p class="blank-sentence">${esc(zhishiBlank(v)).replace(/________/g,'<mark>________</mark>')}</p><div class="choices">${q.choices.map((choice,i)=>`<button class="choice ${q.done&&choice===zhishiAnswer(v)?'correct':''}" data-garden-choice="${i}" ${q.done?'disabled':''}><b>${'ABCD'[i]}. ${esc(choice)}</b>${q.wrong||q.done?`<span class="choice-meaning">${esc(zhishiMeaning(choice))}</span>`:''}</button>`).join('')}</div><div id="garden-feedback" class="garden-feedback">${q.done?`${esc(zhishiAnswer(v))}（${esc(v.meaning)}）<p>${esc(v.translation)}</p>`:q.wrong?`提示：${esc(zhishiAnswer(v))}（${esc(v.meaning)}）。請選一次正確答案，幫它留在記憶裡。`:'慢慢想，不用搶快。'}</div>${q.done?'<button class="ghost" id="garden-speak">▶ 聽完整例句</button><button class="primary" id="garden-next">'+(s.index===s.questions.length-1?'完成任務，送出愛心 ♡':'下一題 →')+'</button>':''}</div>`;
  box.querySelector('#garden-pause').onclick=gardenPage;
  box.querySelectorAll('[data-garden-choice]').forEach(b=>b.onclick=()=>{
    const choice=q.choices[Number(b.dataset.gardenChoice)];
    if(q.done)return;
    q.selected=choice;
    if(choice===zhishiAnswer(v)){q.done=true;if(!q.wrong)s.firstCorrect++;}
    else {
      q.wrong=true;
      storeMistake({id:`vocab:${unit.id}:${v.id}`,course:'vocab',courseLabel:'字彙字識',unit:unit.title,kind:'choice',question:zhishiBlank(v),choices:q.choices,correct:zhishiAnswer(v),correctLabel:v.answerForm||v.word,meanings:Object.fromEntries(q.choices.map(c=>[c,zhishiMeaning(c)]))},choice);
    }
    saveGarden();gardenQuestion();
  });
  if(q.done){
    box.querySelector('#garden-speak').onclick=()=>say(v.example);
    const next=()=>{clearEnterNext();s.index++;if(s.index===s.questions.length)gardenComplete();else{saveGarden();gardenQuestion();}};
    box.querySelector('#garden-next').onclick=next;armEnterNext(next);
    box.querySelector('#garden-next').focus();
  }
}
function gardenComplete() {
  const correct=gardenState.session.firstCorrect, total=gardenState.session.questions.length, before=gardenState.energy;
  gardenState.energy+=10;gardenState.rounds++;gardenState.session=null;saveGarden();
  const p=gardenPets[gardenState.pet], hatched=before<30&&gardenState.energy>=30;
  document.querySelector('#garden-content').innerHTML=`<div class="garden-celebrate">${petArt(gardenState.pet,gardenState.energy)}<p class="eyebrow">${hatched?'Hello, little friend!':'A little more love'}</p><h2>${hatched?`${p.name}孵出來了！`:before<60&&gardenState.energy>=60?`${p.name}長大了！`:'今天的小任務完成了！'}</h2><p class="heart-reward">♡ +10 愛心</p><p>第一次答對 ${correct} / ${total} 題，全部題目都已完成練習與訂正。</p><p>${hatched?`「Hello! I am ${p.english}.」`:'你的每一次嘗試，夥伴都有感受到。'}</p><button class="primary" id="garden-home">回到夥伴花園 →</button></div>`;
  document.querySelector('#garden-home').onclick=gardenPage;
}
