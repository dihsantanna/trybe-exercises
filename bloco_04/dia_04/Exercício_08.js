// 08 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
/*
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .

Valor esperado no retorno da função: 6 .
*/

function indiceMenorValor(array){
    
    let menorValor = array[0];
    let indiceMenorValor = 0;

    for (let index = 0; index < array.length; index += 1){
        if (array[index] < menorValor){
            menorValor = array[index];
            indiceMenorValor = index;
        }
    }
    return indiceMenorValor;
}

console.log(indiceMenorValor([-2, 4, 6, 7, 10, 0, 3]));