import { addScore, getScores, name, score } from './index.js';

const createScore = () => {
  addScore(name.value, score.value);
  name.value = '';
  score.value = '';
};

const scores = () => {
  const allscores = getScores();
  console.log(allscores);
};

export { createScore, scores };
