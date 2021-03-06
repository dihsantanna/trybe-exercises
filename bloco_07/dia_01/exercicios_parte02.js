// Exercício 01
const fatorial = n => {
    let answer = n;
    if (n > 0) {
        for (let index = n - 1; index > 0; index -= 1) {
            answer = answer * index;
        }
    } else {
        return `Não é possível calcular fatorial de ${n}.`
    }
    return answer;
}
// console.log(fatorial(4));
// Exercício 02
const longestWord = str => {
   let words = str.split(' ');
   let maxLength = 0;
   let answer = '';
   for (const word of words) {
       if (word.length > maxLength) {
        maxLength = word.length
        answer = word;
       } 
   }
   return answer;
}
// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
// Exercício 03
const btnCounter = document.querySelector('button');
const counter = document.querySelector('#counter');
let clickCount = 0;
counter.innerHTML = clickCount;
btnCounter.addEventListener('click', () => {
  clickCount += 1;
  counter.innerHTML = clickCount;
});
// Exercício 04
// Função 01
const replaceX = str => {
  let strDetermined = "Tryber x aqui!";
  let strEdited = strDetermined.replace('x', str);
  return strEdited;
}
// console.log(replaceX('Diogo'));
// Função 02
const myMainSkills = ['JavaScript', 'HTML', 'CSS', 'DOM', 'GIT'];
const myDescription = (str, arr) => {
  const sortArr = arr.sort();
  return `${str} Minhas cinco principais habilidades são:
  - ${sortArr[0]};
  - ${sortArr[1]};
  - ${sortArr[2]};
  - ${sortArr[3]};
  - ${sortArr[4]}. #goTrybe`;
}

console.log(myDescription(replaceX('Diogo'), myMainSkills));