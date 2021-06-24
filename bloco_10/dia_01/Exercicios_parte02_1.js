const encode = (string) => {
    const strSplit = string.split('');
    return strSplit.reduce((acc, curr) => {
      const replaceA = curr.replace('a', 1);
      const replaceE = replaceA.replace('e', 2);
      const replaceI = replaceE.replace('i', 3);
      const replaceO = replaceI.replace('o', 4);
      const replaceU = replaceO.replace('u', 5);
      acc += replaceU;
      return acc;
    }, '');
  };
  
  const decode = (string) => {
    const strSplit = string.split('');
    return strSplit.reduce((acc, curr) => {
      const replaceA = curr.replace(1, 'a');
      const replaceE = replaceA.replace(2, 'e');
      const replaceI = replaceE.replace(3, 'i');
      const replaceO = replaceI.replace(4, 'o');
      const replaceU = replaceO.replace(5, 'u');
      acc += replaceU;
      return acc;
    }, '');
  };

  module.exports = {
      encode,
      decode
  }