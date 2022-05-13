import { submitBtn, refreshBtn } from './modules/index.js';
import { createScore, getAllScores } from './modules/utils.js';
import './style.css';

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createScore();
  setTimeout(() => refreshBtn.click(), 2000);
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getAllScores();
});
