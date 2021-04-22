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

let n = -2;

if (n < 0) {
    console.log("negative");
}
else if (n > 0) {
    console.log("positive");
}
else {
    console.log("zero")
}

/*Exercício 05 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

* Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

* Um ângulo será considerado inválido se não tiver um valor positivo.*/

let anguloA = 50;
let anguloB = 50;
let anguloC = 80;


if ((anguloA + anguloB + anguloC) === 180) {
    console.log(true);
}
else if ((anguloA || anguloB || anguloC) < 0) {
    console.log("ERRO!");
}
else {
    console.log (false);
}

/*Exercício 06 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

*Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras
minúsculas, sem aumentar a quantidade de condicionais.

*Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

*Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

*Exemplo: bishop (bispo) -> diagonals (diagonais) */

let pecaDeXadrez = "Rei";
let lcName = pecaDeXadrez.toLowerCase();

switch (lcName) {
    case "rei":
        console.log("Todas as direções (horizontal, vertical e diagonal), uma casa por vez.");
        break;

    case "rainha":
        console.log("Todas as direções (horizontal, vertical e diagonal), sem pular outras peças.");
        break;

    case "bispo":
        console.log("Diagonal. Não pode pular outras peças.");
        break;

    case "cavalo":
        console.log('Em "L", duas casas em sentido horizontal e mais uma na vertical ou vice-versa. Pode pular as outras peças.');
        break;

    case "torre":
        console.log("Vertical ou horizontal, mas não pode pular outras peças.");
        break;

    case "peão":
        console.log("Uma casa para frente e captura peças na diagonal. Pode avançar duas casas no seu primeiro movimento do jogo.");
        break;

    default:
        console.log("ERRO!")
}