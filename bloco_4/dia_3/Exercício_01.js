// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
/*

n = 5

*****
*****
*****
*****
*****

*/

let n = 5;
let symbol = "*";
let imputLine = "";

for (let indexColumm = 0; indexColumm < n; indexColumm += 1){
    imputLine += symbol;
}

for (let indexLine = 0; indexLine < n; indexLine += 1){
    console.log(imputLine);
}