// 4- Depois, faça uma pirâmide com n asteriscos de base:
/*

n = 5

  *
 ***
*****

*/

let n = 5;
let symbol = "*";
let imputLine = "";
let space = " ";
let midOfMatrix = (n+1) / 2;
let leftOfMid = midOfMatrix;
let rightOfMid = midOfMatrix;

for (let indexLine = 0; indexLine <= midOfMatrix; indexLine += 1){
       for (let columnIndex = 0; columnIndex <= n; columnIndex += 1){
              if (columnIndex > leftOfMid && columnIndex < rightOfMid){
                     imputLine = imputLine + symbol;
              } else{
                     imputLine = imputLine + space;
              }
       }
    console.log(imputLine);
    imputLine = "";
    leftOfMid -= 1;
    rightOfMid += 1;
}
