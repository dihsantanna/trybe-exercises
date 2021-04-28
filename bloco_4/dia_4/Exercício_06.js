// 06 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
/*
Exemplo de palíndromo: arara .

verificaPalindrome('arara') ;

Retorno esperado: true

verificaPalindrome('desenvolvimento') ;

Retorno esperado: false
*/

function verificaPalindrome(string){
    let palavra = string.toLowerCase()

    let comparator = "";

    let ehPalindromo;

    for (index = palavra.length - 1; index >= 0; index -= 1){
        comparator += palavra[index];
    }

    if (comparator === palavra){
        ehPalindromo = true;
    } else {
        ehPalindromo = false;
    }

    return ehPalindromo;
}

console.log(verificaPalindrome('arara'));