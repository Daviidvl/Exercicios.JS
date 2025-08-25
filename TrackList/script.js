const STORAGE_KEY = 'habit-tracker:v1';
const state = { items: load() };

function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items)); }
function load() { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }

const listEl = document.getElementById('list');
const emptyEl = document.getElementById('emptyState');
const inputEl = document.getElementById('habitInput');
const addBtn = document.getElementById('addBtn');
const toggleAllBtn = document.getElementById('toggleAllBtn');
const clearDoneBtn = document.getElementById('clearDoneBtn');
const barEl = document.getElementById('bar');
const percentEl = document.getElementById('percent');
const progressMsgEl = document.getElementById('progressMsg');
const counterEl = document.getElementById('counter');
const template = document.getElementById('itemTemplate');

function uid() { return Math.random().toString(36).slice(2); }

function render() {
  listEl.innerHTML = '';
  if (state.items.length === 0) {
    emptyEl.style.display = 'block';
  } else {
    emptyEl.style.display = 'none';
    for (const item of state.items) {
      const node = template.content.firstElementChild.cloneNode(true);
      node.dataset.id = item.id;

      const check = node.querySelector('.check');
      const titleInput = node.querySelector('.title');

      titleInput.value = item.title;
      titleInput.classList.toggle('done', item.done);
      if (item.done) check.classList.add('checked');

      check.addEventListener('click', () => {
        item.done = !item.done;
        save(); updateProgress(); render();
      });

      titleInput.addEventListener('change', () => {
        item.title = titleInput.value.trim() || 'Hábito sem nome';
        save(); render();
      });

      node.querySelector('[data-action="delete"]').addEventListener('click', () => {
        state.items = state.items.filter(i => i.id !== item.id);
        save(); updateProgress(); render();
      });

      node.querySelector('[data-action="duplicate"]').addEventListener('click', () => {
        state.items.push({ id: uid(), title: item.title + ' (cópia)', done: item.done });
        save(); updateProgress(); render();
      });

      listEl.appendChild(node);
    }
  }
  updateProgress();
}

function addHabit(title) {
  const t = (title || '').trim();
  if (!t) return;
  state.items.push({ id: uid(), title: t, done: false });
  save();
  inputEl.value = '';
  render();
}

function updateProgress() {
  const total = state.items.length;
  const done = state.items.filter(i => i.done).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  barEl.style.width = pct + '%';
  percentEl.textContent = pct + '%';
  counterEl.textContent = `${done}/${total} feitos`;

  let msg = '';
  if (total === 0) msg = 'Adiciona hábitos para começar';
  else if (pct === 0) msg = 'Vamos começar?';
  else if (pct < 50) msg = 'Bom começo! Continua!';
  else if (pct < 80) msg = 'Bom progresso!';
  else if (pct < 100) msg = 'Quase lá!';
  else msg = 'Parabéns! 100% concluído! 🎉';

  progressMsgEl.textContent = msg;
}

addBtn.addEventListener('click', () => addHabit(inputEl.value));
inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') addHabit(inputEl.value); });

toggleAllBtn.addEventListener('click', () => {
  const total = state.items.length;
  const done = state.items.filter(i => i.done).length;
  const target = done < total;
  state.items = state.items.map(i => ({ ...i, done: target }));
  save(); render();
  toggleAllBtn.textContent = target ? 'Desmarcar todos' : 'Marcar todos';
});

clearDoneBtn.addEventListener('click', () => {
  state.items = state.items.filter(i => !i.done);
  save(); render();
});

render();
