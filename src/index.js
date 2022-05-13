import { submitBtn } from './modules/index.js';
import { createScore } from './modules/utils.js';
import './style.css';

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createScore();
});
