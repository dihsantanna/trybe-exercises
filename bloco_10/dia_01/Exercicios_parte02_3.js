const hydrate = (drinks) => {
    const numbers = drinks.match(/\d+/g);
    const amountGlasses = numbers.reduce((glassesWater, amountDrinks) => {
      glassesWater += parseInt(amountDrinks, 0);
      return glassesWater;
    }, 0);
    if (amountGlasses === 1) {
      return `${amountGlasses} copo de água`;
    }
    return `${amountGlasses} copos de água`;
  };

  module.exports = hydrate;
  