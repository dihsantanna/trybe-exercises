
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 01 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

/*
for (let number of numbers) {
    console.log(number);
} */

// 02 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

/* let somaNumbers = 0;

for (let number of numbers) {
    somaNumbers += number;
}*/

//console.log(somaNumbers)

// 03 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// console.log(somaNumbers / numbers.length);

// 04 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
// "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

/* let mediaNumbers = somaNumbers / numbers.length;

if (mediaNumbers > 20) {
    console.log("Valor maior que 20");
}
else {
    console.log("Valor menor ou igual a 20");
} */

// 05 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

/*
let maiorValor = numbers[0];

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if (numbers[index1] > maiorValor) {  
        maiorValor = numbers [index1];
    }
};

console.log(maiorValor); */

// 06 - Descubra quantos valores ímpares existem no array e imprima o resultado.
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

/*
let valoresImpares = [];
let Impar = false ;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        valoresImpares.push(numbers[index]);
    }
    if (numbers[index] % 2 !== 0) {
        Impar = true;
    }
};

if (Impar === false) {
    console.log("nenhum valor ímpar encontrado")
}
else {
    console.log(valoresImpares)
}
*/

// 07 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = numbers[0];

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if (numbers[index1] < menorValor) {  
        menorValor = numbers [index1];
    };
};

console.log(menorValor);