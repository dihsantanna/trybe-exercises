// 07 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
/*
Array de teste: [2, 3, 6, 7, 10, 1]; .

Valor esperado no retorno da função: 4 .
*/

function indiceMaiorValor(array){
    
    let maiorValor = array[0];
    let indiceMaiorValor = 0;

    for (let index = 0; index < array.length; index += 1){
        if (array[index] > maiorValor){
            maiorValor = array[index];
            indiceMaiorValor = index;
        }
    }
    return indiceMaiorValor;
}

console.log(indiceMaiorValor([21, 3, 6, 12, 10, 71]));