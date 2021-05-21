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
// Exercício 02
const createReport = (obj, professor) => {
    const report = {
        professor: professor,
        aulas: [],
        estudantes: 0,
    }
    for (const key in obj) {
        if (obj[key].professor === professor) {
            report['aulas'].push(obj[key].materia);
            report.estudantes += obj[key].numeroEstudantes;
        };
    };
    if (report.aulas.length === 0) {
        return `Professor(a) ${professor} não deu aula.`
    }
    return report;
}
