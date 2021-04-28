// 09 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
/*
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .

Valor esperado no retorno da função: Fernanda .
*/

function largerName(array){

        let comparator = 0;
        let largerName = '';

    for (let index = 0; index < array.length; index += 1){
        
        let word = array[index];
        let counter = 0;

        for (let letterIndex = 0; letterIndex < word.length; letterIndex += 1){
            counter += 1;
        };

        if (counter === comparator){
            largerName = largerName + ", " + array[index];
        };

        if (counter > comparator){
            comparator = counter;
            largerName = array[index];
        };
        
    };

    return largerName;

};

console.log(largerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));