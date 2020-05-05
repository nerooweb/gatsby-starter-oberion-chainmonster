import ky from 'ky';

export const requestGameData = async (url) => {
  const json = { url: url };
  const gameData = await ky.post("http://localhost:3000/api/page-json/v1", json).json();

  console.log(gameData);
}