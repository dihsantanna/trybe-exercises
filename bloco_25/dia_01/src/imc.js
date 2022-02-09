const readline = require('readline-sync');


function imc() {
  const peso = readline.questionInt('Qual o seu peso em kg? (ex. 68.5) =  ');
  const altura = readline.question('Qual a sua altura em cm? (ex. 1,85M = 185) =  ');

  const totalIMC = (peso / Math.pow(altura * 0.01, 2))
    .toFixed(2);

  console.log(`Seu IMC é ${totalIMC}.`)
}

imc();
