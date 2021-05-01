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

* Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras
minúsculas, sem aumentar a quantidade de condicionais.

* Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

* Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

* Exemplo: bishop (bispo) -> diagonals (diagonais) */

let pecaDeXadrez = "Rei";

switch (pecaDeXadrez.toLowerCase()) {
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

/*Exercício 07 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
Siga essas regras:


* Porcentagem >= 90 -> A

* Porcentagem >= 80 -> B

* Porcentagem >= 70 -> C

* Porcentagem >= 60 -> D

* Porcentagem >= 50 -> E

* Porcentagem < 50 -> F

* O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let notaProva = 79;

if (notaProva > 100 || notaProva < 0) {
    console.log("ERRO!");
}
else if (notaProva >= 90) {
    console.log("A");
}
else if (notaProva >= 80) {
    console.log("B");
}
else if (notaProva >= 70) {
    console.log("C");
}
else if (notaProva >= 60) {
    console.log("D");
}
else if (notaProva >= 50) {
    console.log("E");
}
else {
    console.log("F");
}

/*Exercício 08 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três
 for par. Caso contrário, ele retorna false .

* Bonus: use somente um if . */

let numeroA = 14;
let numeroB = 18;
let numeroC = 2;

if ((numeroA % 2 == 0) || (numeroB % 2 == 0) || (numeroC % 2 == 0)) {
    console.log(true);
}
else {
    console.log(false);
}

/*Exercício 09 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos
uma das três for ímpar. Caso contrário, ele retorna false .

* Bonus: use somente um if .*/

let numberA = 14;
let numberB = 17;
let numberC = 10;

if ((numberA % 2 != 0) || (numberB % 2 != 0) || (numberC % 2 != 0)) {
    console.log(true);
}
else {
    console.log(false);
}

/*Exercicio 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes:
o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro
(valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

* Atente que, sobre o custo do produto, incide um imposto de 20%.

* Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

* O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

- valorCustoTotal = valorCusto + impostoSobreOCusto
- lucro = valorVenda - valorCustoTotal (lucro de um produto) */

let valorCustoProduto = 10;
let valorVenda = 24;

let valorCustoTotal = valorCustoProduto + (valorCustoProduto * 0.2);
let lucroPorProduto = valorVenda - valorCustoTotal;

let produtosVendidos = 1000;

if ((valorCustoProduto < 0) || (valorVenda < 0) || (valorCustoTotal < 0) || (lucroPorProduto < 0)) {
    console.log("ERROR! Valor Inválido");
}
else {
    console.log(lucroPorProduto * produtosVendidos);
}

/*Exercício 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS
e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

* A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

* INSS (Instituto Nacional do Seguro Social)
   - Salário bruto até R$ 1.556,94: alíquota de 8%
   - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
   - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
   - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
* IR (Imposto de Renda)
   - Até R$ 1.903,98: isento de imposto de renda
   - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
   - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
   - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
   - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

 Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

* O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de
 R$ 3.000, ou seja, R$ 330,00.

* Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

* Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então,
 de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

   - R$ 2.670,00: salário com INSS já deduzido;
   - 7.5%: alíquota de imposto de renda;
   - R$ 142,80 parcela a se deduzir do imposto.

   * Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

* O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
 
Resultado: R$ 2.612,55.
 Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */


 let salarioBruto = 3000;

 let descontoInss ;
 
 
 //Condições de desconoto do INSS.
 
 if (salarioBruto <= 1556.94) {
     descontoInss = 0.08;
 }
 else if (salarioBruto <= 2594.92) {
     descontoInss = 0.09;
 }
 else if (salarioBruto <= 5189.82) {
     descontoInss = 0.11;
 }
 else {
     descontoInss = 570.88;
 }
 
 let salarioDescInss ;
 
 //Verifica condições especiais de desconto do INSS para quem ganha acima de R$ 5.189,82.
 
 if (salarioBruto > 5189.82) {
    salarioDescInss = salarioBruto - descontoInss;
 }
 else {
    salarioDescInss = salarioBruto - (salarioBruto * descontoInss);
 }
 
 let descontoIr ;
 let deducaoIr ;
 
 //Condições de desconto do IR.
 
 if (salarioDescInss <= 1903.98) {
    descontoIr = 0;
    deducaoIr = 0;
 }
 else if (salarioDescInss <= 2826.65) {
    descontoIr = 0.075;
    deducaoIr = 142.80;
 }
 else if (salarioDescInss <= 3751.05) {
    descontoIr = 0.15;
    deducaoIr = 354.80;
 }
 else if (salarioDescInss <= 4664.68) {
    descontoIr = 0.225;
    deducaoIr = 636.13;
 }
 else {
    descontoIr = 0.275;
    deducaoIr = 869.36;
 }
 

 


 
 //Cálculo do salário Líquido.
 
 let salarioLiquido = salarioDescInss - ((salarioDescInss * descontoIr) - deducaoIr);
 
 console.log("Salário Líquido = R$ "+salarioLiquido.toFixed(2));