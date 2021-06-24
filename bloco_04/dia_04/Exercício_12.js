// 12 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
/*
Valor de teste: 'trybe' e 'be'

Valor esperado no retorno da função: true

verificaFimPalavra('trybe', 'be') ;

Retorno esperado: true

verificaFimPalavra('joaofernando', 'fernan') ;

Retorno esperado: false
*/

function verificaFimPalavra(word, ending){

    let tamanhoEnding = ending.length;
    let tamanhoWord = word.length;
    let indice = (tamanhoWord - tamanhoEnding);
    let comparador = '';

    for (indice; indice < tamanhoWord; indice += 1){
        comparador += word[indice];
    }

    if (comparador === ending){
        return true;
    } else {
        return false;
    }
}

console.log(verificaFimPalavra('joaofernando', 'fernan'));