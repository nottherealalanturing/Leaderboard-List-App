const getScores = async () => {
  const scores = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/leaderboard0001'
  );
  return scores.json();
};

export default getScores;
