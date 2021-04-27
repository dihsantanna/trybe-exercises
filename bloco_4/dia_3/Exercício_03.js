// 3- Agora inverta o lado do triângulo. Por exemplo:
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
let space = " ";
let imputPosition = n;

for (let indexLine = 0; indexLine <= n; indexLine += 1){
       for (let columnIndex = 0; columnIndex <= n; columnIndex += 1){
              if (columnIndex < imputPosition){
                     imputLine = imputLine + space;
              } else{
                     imputLine = imputLine + symbol;
              }
       }
    console.log(imputLine);
    imputLine = "";
    imputPosition -= 1;
}