// Exercício 01
const assert = require('assert');

const greetPeople = (people) => {
    const greeting = 'Hello ';
    let result = [];
    for (const person of people) {
      result.push(greeting + person);
    }
    return result;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.deepStrictEqual(typeof greetPeople, 'function');
  assert.deepStrictEqual(greetPeople(parameter), result);