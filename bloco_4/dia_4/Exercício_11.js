// 11 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
/*
Valor de teste: N = 5 .

Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/

function somaGauss(N){

    let numSoma = 0;

    for (let index = 1; index <= N; index += 1){
        numSoma += index;
    }

    return numSoma;
}

console.log(somaGauss(5));