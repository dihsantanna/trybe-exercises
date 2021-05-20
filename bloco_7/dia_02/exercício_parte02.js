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
// Exercício 04
const listValues = obj => Object.values(obj);
// Exercício 05
const allLessons = Object.assign({lesson1, lesson2, lesson3});
// Exercício 06
const numberStudents = obj => `Número de Estudantes por aula:
- Aula-1: ${obj.lesson1.numeroEstudantes};
- Aula-2: ${obj.lesson2.numeroEstudantes};
- Aula-3: ${obj.lesson3.numeroEstudantes}.`;
console.log(numberStudents(allLessons));