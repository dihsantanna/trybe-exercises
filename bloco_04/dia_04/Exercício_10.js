//10 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
/*
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .

Valor esperado no retorno da função: 2 .
*/

function moreRepeat(Array){

    let moreRepeat;
    let comparator = 0;
    

    for (let index in Array){

        let counter = 0;

        for (let index2 in Array){
            if (Array[index] === Array[index2])
            counter += 1
        }

        if (counter > comparator){
            comparator = counter;
            moreRepeat = Array[index];
        };
        
    };

return moreRepeat;

};

console.log(moreRepeat([2, 3, 2, 3, 8, 2, 3]));