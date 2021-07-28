import dataBase from './data/users';

function checkLogin(login) {
  const time = 2000;
  const check = dataBase.find((data) => data.email === login.email
  && data.password === login.password);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(!!check);
    }, time);
  });
}

console.log(checkLogin({
  email: 'trybe@trybe.com',
  password: 'trybe',
}));

export default checkLogin;
