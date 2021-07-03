const URL_API = 'https://dog.ceo/api/breeds/image/random';
const URL_ERROR = 'https://lh3.googleusercontent.com/pw/AM-JKLVvyrVxXs91fUHwZMxcRJ0hw3Shq7CgrkyAHYR8DIgiT1N5O-KplIdPzJI2Y-fme3DjES2TWY57H6keSa4woaJ4xMO4y-v2tH5G7Uarhb1tfsMfk7lRpGALk8DbeLqhBlYaYYmyxzZFs4b42HLrc_vXKQ=w768-h433-no?authuser=0';

async function fetchDog() {
  try {
    const response = await fetch(URL_API);
    const json = await response.json();
    const message = await json.message;
    return message;
  } catch (error) {
    console.error(error);
    alert(`Desculpa o carregamento falhou! :(
      Experimente dar um refresh! :D
    )`)
    return URL_ERROR;
  }
};

export {
  fetchDog,
  URL_ERROR,
}
