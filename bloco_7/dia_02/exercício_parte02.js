// Exercício 01
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
const turnoManha = (obj, chave, valor) => {
    return obj[chave] = valor;
}
turnoManha(lesson2, 'turno', 'manhã');
// Exercício 02
const listKey = obj => Object.keys(obj);
// Exercício 03
const objLength = obj => listKey(obj).length;
console.log(objLength(lesson2));