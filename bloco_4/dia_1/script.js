/*Exercício 01 - Faça cinco programas, um para cada operação aritmética básica. 
Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.
 Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)*/

let a;
let b;

a = 50;
b = 5;

const adição = a + b;
console.log(adição);

const subtração = a - b;
console.log(subtração);

const multiplicacao = a * b;
console.log(multiplicacao);

const divisao = a / b;
console.log(divisao);

const modulo = a % b;
console.log(modulo);

/*Exercício 02 - Faça um programa que retorne o maior de dois números.
Defina no começo do programa duas variáveis com os valores que serão comparados.*/

let firstNumber;
let secondNumber;

firstNumber = 1;
secondNumber = 2;

if (firstNumber > secondNumber) {
    console.log("Primeiro Numero --> "+firstNumber);
}
else if (firstNumber < secondNumber) {
    console.log("Segundo Número --> "+secondNumber);
}
else {
    console.log("Números são iguais");
}

/*Exercício 03 - Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os valores que serão comparados.*/

let primeiroNumero;
let segundoNumero;
let terceiroNumero;

primeiroNumero = 10;
segundoNumero = 10;
terceiroNumero = 10;

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    console.log("Primeiro Número --> "+primeiroNumero);
}
else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    console.log("Segundo Número --> "+segundoNumero);
}
else if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
    console.log("Terceiro Número --> "+terceiroNumero);
}
else {
    console.log("Números são Iguais")
}

/*Exercício 04 - Faça um programa que, dado um valor definido numa variável,
retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.*/

