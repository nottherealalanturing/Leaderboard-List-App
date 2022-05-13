import {
  addScore, getScores, name, score, scorelist,
} from './index.js';

const createScore = async () => {
  await addScore(name.value, score.value)
    .then((msg) => msg)
    .catch((err) => err);
  name.value = '';
  score.value = '';
};

const getAllScores = async () => {
  let list = '';
  await getScores()
    .then((value) => {
      value.result.forEach((element) => {
        list += `<li>${element.user} : ${element.score} </li>`;
      });
    })
    .catch((err) => err);
  scorelist.innerHTML = list;
};

export { createScore, getAllScores };
