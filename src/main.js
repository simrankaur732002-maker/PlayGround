import './style.css';
import { Game } from './game.js';
import { GameUI } from './ui.js';

const loading = document.querySelector('#loadingBar i');
const startBtn = document.getElementById('startBtn');

function setProgress(value) {
  if (loading) loading.style.width = `${value}%`;
}

async function boot() {
  try {
    setProgress(12);
    startBtn.disabled = true;
    startBtn.textContent = 'Building city…';
    await new Promise((resolve) => requestAnimationFrame(resolve));
    setProgress(34);
    const game = new Game(document.getElementById('game'));
    window.harborGame = game;
    setProgress(78);
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const ui = new GameUI(game);
    window.harborUI = ui;
    game.setUI(ui);
    setProgress(100);
    startBtn.disabled = false;
    startBtn.innerHTML = 'Play Now <b>→</b>';
    document.querySelector('.start-content')?.classList.add('ready');
  } catch (error) {
    console.error(error);
    setProgress(100);
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.textContent = 'Retry';
      startBtn.addEventListener('click', () => window.location.reload(), { once: true });
    }
    const note = document.getElementById('startNote');
    if (note) note.textContent = 'Harbor City had trouble starting. Tap Retry to reload the city.';
  }
}

boot();
