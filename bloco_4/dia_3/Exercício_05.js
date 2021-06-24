// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
/*

Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******

*/

let n = 7;
let symbol = "*";
let imputLine = "";
let space = " ";
let midOfMatrix = (n+1) / 2;
let leftOfMid = midOfMatrix;
let rightOfMid = midOfMatrix;

for (let indexLine = 0; indexLine <= midOfMatrix - 1; indexLine += 1){
    if (indexLine === midOfMatrix - 1){
        for (let indexColumn = 0; indexColumn <= n; indexColumn += 1){
            if (indexColumn >= leftOfMid && indexColumn <= rightOfMid){
                imputLine = imputLine + symbol;
            } else {
                imputLine = imputLine + space;
            }
        }
    }else{
        for (let columnIndex = 0; columnIndex <= n; columnIndex += 1){
            if (columnIndex === leftOfMid || columnIndex === rightOfMid){
                    imputLine = imputLine + symbol;
            } else{
                    imputLine = imputLine + space;
            }
        }
    
    }
       
    console.log(imputLine);
    imputLine = "";
    leftOfMid -= 1;
    rightOfMid += 1;
}