// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  // 1 - Crie uma função que retorna o dano do dragão.
// * O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDamage = () => {
    const strength = dragon.strength;
    const damage = Math.ceil(Math.random() * (strength - 15) + 15);
    return damage;
}
// console.log(dragonDamage());