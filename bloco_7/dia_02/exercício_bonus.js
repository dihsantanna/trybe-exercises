const allLessons = {
  lesson1: { 
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã',
    },
  lesson2: {
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'noite',
    },
  lesson3: {
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite',
    },
};
// Exercício 01
const presenceMath = obj => obj.lesson1.numeroEstudantes + obj.lesson3.numeroEstudantes;
