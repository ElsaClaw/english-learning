const MISTAKE_STORE_KEY = 'english-path-mistake-bank-v1';

function mistakeBank() { try { return JSON.parse(localStorage.getItem(MISTAKE_STORE_KEY) || '[]'); } catch { return []; } }
function saveMistakeBank(items) { localStorage.setItem(MISTAKE_STORE_KEY, JSON.stringify(items)); }
function storeMistake(item, selected) {
  const items = mistakeBank();
  const existing = items.find(record => record.id === item.id);
  if (existing) Object.assign(existing, { ...item, selected, wrongCount: (existing.wrongCount || 0) + 1, streak: 0, updatedAt: new Date().toISOString() });
  else items.push({ ...item, selected, wrongCount: 1, streak: 0, updatedAt: new Date().toISOString() });
  saveMistakeBank(items);
}
function markMistakeCorrect(id) {
  const items = mistakeBank(), index = items.findIndex(record => record.id === id);
  if (index < 0) return { removed: false, streak: 0 };
  items[index].streak = (items[index].streak || 0) + 1;
  items[index].updatedAt = new Date().toISOString();
  if (items[index].streak >= 3) { items.splice(index, 1); saveMistakeBank(items); return { removed: true, streak: 3 }; }
  saveMistakeBank(items); return { removed: false, streak: items[index].streak };
}
function removeMistake(id) { saveMistakeBank(mistakeBank().filter(record => record.id !== id)); }
