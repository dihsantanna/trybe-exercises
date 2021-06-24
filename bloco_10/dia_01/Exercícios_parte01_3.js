// Exercício 03

function myRemoveWithoutCopy(arr, item) {
  arr.forEach((value, index) => {
    if (value === item) arr.splice(index, 1);
  })

  return arr;
}

module.exports = myRemoveWithoutCopy;
