class Student {
  readonly _registration: number;
  readonly name: string;
  private _examGrades: number[];
  private _workNotes: number[];

  constructor (
    registration: number,
    name: string,
    examGrades: number[] = [],
    workNotes: number[] = []
    ) {
    this._registration = registration;
    this.name = name;
    this._examGrades = examGrades;
    this._workNotes = workNotes;
  };

  get examGrades() {
    return this._examGrades;
  };

  get workNotes() {
    return this._workNotes;
  };

  addExamGrades(note: number) {
    const { _examGrades } = this;
    
    switch (true) {
      case _examGrades.length > 3:
        console.log('Não é possível adicionar novas notas.');
      break;
      case note < 0 || note > 100:
        console.log('Nota deve ser um numero de 0 à 100.');
      break;
      default:
        _examGrades.push(note);
    };
  };

  addWorkNotes(note: number) {
    const { _workNotes } = this;

    switch (true) {
      case _workNotes.length > 1:
        console.log('Não é possível adicionar novas notas.');
      break;
      case note < 0 || note > 100:
        console.log('Nota deve ser um numero de 0 à 100.');
      break;
      default:
        _workNotes.push(note);
    };
  };

  sumAllNotes() {
    const {_examGrades, _workNotes} = this;

    const totalExames = _examGrades.reduce((acc, curr) => acc + curr, 0);
    const totalWorks = _workNotes.reduce((acc, curr) => acc + curr, 0);
    return totalWorks + totalExames;
  }

  averageNotes() {
    const {_examGrades, _workNotes} = this;

    const totalExames = _examGrades.reduce((acc, curr) => acc + curr, 0);
    const totalWorks = _workNotes.reduce((acc, curr) => acc + curr, 0);

    const avgExames = totalExames / _examGrades.length;
    const avgWorks = totalWorks / _workNotes.length;

    return (avgExames + avgWorks) / 2;
}

}

const student1 = new Student(1, 'Fulano de Tal', [70, 80, 75], [80]);

console.log(student1);

console.log('-------------------------');

student1.addExamGrades(101);

console.log('-------------------------');

console.log('Exame Grades: ', student1.examGrades);

console.log('-------------------------');

student1.addExamGrades(-1);

console.log('-------------------------');

console.log('Exame Grades: ', student1.examGrades);

console.log('-------------------------');

student1.addExamGrades(65);

console.log('Exame Grades: ', student1.examGrades);

console.log('-------------------------');

student1.addExamGrades(65);

console.log('Exame Grades: ', student1.examGrades);

console.log('-------------------------');

student1.addWorkNotes(101);

console.log('-------------------------');

console.log('Work Notes: ', student1.workNotes);

console.log('-------------------------');

student1.addWorkNotes(-1);

console.log('-------------------------');

console.log('Work Notes: ', student1.workNotes);

console.log('-------------------------');

student1.addWorkNotes(65);

console.log('Work Notes: ', student1.workNotes);

console.log('-------------------------');

student1.addWorkNotes(65);

console.log('Work Notes: ', student1.workNotes);

console.log('-------------------------');

console.log(student1.sumAllNotes());

console.log('-------------------------');

console.log(student1.averageNotes());
