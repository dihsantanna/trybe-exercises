// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
/*

n = 5

*
**
***
****
*****

*/

let n = 5;
let symbol = "*";
let imputLine = "";

for (let indexLine = 0; indexLine <= n; indexLine += 1){
    console.log(imputLine);
    imputLine += symbol;
}