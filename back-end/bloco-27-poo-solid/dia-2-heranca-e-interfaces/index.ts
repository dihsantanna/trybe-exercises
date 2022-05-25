import uniqid from 'uniqid';
// Exercício 1 : Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.

function validationsPerson(name: string, birthDate: Date ) {
  const date = new Date();
  if (!name || name.length < 3) {
    console.log('nome deve conter ao menos 3 caracteres.');
    return { name: 'invalid', birthDate };
  };

  if (birthDate > date) {
    console.log('Opa! Acho que essa pessoa ainda não nasceu. ;)');
    return { name: 'invalid', birthDate };
  };

  const checkYear = date.getFullYear() - birthDate.getFullYear() > 121;
  const checkMonth = date.getFullYear() - birthDate.getFullYear() === 121
    && date.getMonth() >= birthDate.getMonth();
  const checkDay = date.getFullYear() - birthDate.getFullYear() === 121
    && date.getMonth() === birthDate.getMonth()
    && date.getDate() >= birthDate.getDate();

  if (checkYear || checkMonth || checkDay) {
      console.log('Pessoa deve possuir no máximo 120 anos de idade.');
      return { name, birthDate: new Date('invalido') };
    }
    return false;
};

class Person {
  public name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    const check = validationsPerson(name, birthDate);

    if (!!check) {
      this.name = check.name;
      this._birthDate = check.birthDate;
      return;
    }

    this.name = name;
    this._birthDate = birthDate;
  }

  get birthDate() {
    return this._birthDate;
  }

};

// const p1 = new Person('Diogo', new Date(1991, 7, 5));
// const p2 = new Person('Gustavo', new Date(1994, 1, 18));

// // console.log(p1);
// // console.log(p2);

class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(name: string, birthDate: Date, examsGrades: number[] = [], worksGrades: number[] = []) {
    super(name, birthDate);
    
    this._enrollment = uniqid();
    this._examsGrades = examsGrades.length > 4 ? [] : examsGrades;
    this._worksGrades = worksGrades.length > 2 ? [] : worksGrades;
    
    this.sumAverageNotes = this.sumAverageNotes.bind(this);
  };

  set examsGrades(note: number[]) {
    if (this._examsGrades.length + note.length === 4) {
      this._examsGrades = [...this._examsGrades, ...note];
    };
  };

  set worksGrades(note: number[]) {
    if (this._worksGrades.length + note.length === 2) {
      this._worksGrades = [ ...this._worksGrades ,...note];
    };
  };

  get examsGrades() {
    return this._examsGrades;
  }

  get worksGrades() {
    return this._worksGrades;
  }

  sumNotes() {
    const { _examsGrades, _worksGrades } = this;
    return _examsGrades
      .reduce((acc, curr) => acc + curr, 0) + _worksGrades
        .reduce((acc, curr) => acc + curr, 0);
  };

  sumAverageNotes() {
    const { _examsGrades, _worksGrades, sumNotes } = this;
    return sumNotes() / (_examsGrades.length + _worksGrades.length);
  };

  generateEnrollment() {
    const { _enrollment } = this;

    return _enrollment;
  };
};

// const std1 = new Student('Diogo', new Date(1991, 7, 5), [100, 100, 100, 100], [100, 100]);
// const std2 = new Student('Gustavo', new Date(1994, 1, 18), [100, 100, 100, 100], [100, 100]);
// const std3 = new Student('Fulano', new Date(1995, 8, 11), [80, 50, 75, 80], [90, 100]);
// const std4 = new Student('Fulano2', new Date(1996, 7, 15), [85, 80, 70, 90], [90, 95]);
// const std5 = new Student('Fulano3', new Date(1997, 9, 19), [60, 82, 65, 55], [50, 50]);

// // console.log(std1);
// // console.log(std2);
// // console.log(std3);
// // console.log(std4);
// // console.log(std5);

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
};

class Subject {
  constructor(public name: string) {
    this.name = name.length > 2 ? name : 'nome deve possuir ao menos 3 caracteres';
  };
};

const matematica = new Subject('Matemática');
const historia = new Subject('História');
const filosofia = new Subject('Filosofia');

class Teacher extends Person implements Employee {
  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    public subject: Subject,
    private _admissionDate: Date,
    private _registration: string = uniqid(),
    ) {
    super(name, birthDate);
    this._registration = _registration.length >= 16 ? _registration : uniqid();
    this._salary = _salary < 0 ? 0 : _salary;
    this._admissionDate = _admissionDate > new Date() ? new Date('data invalida') : _admissionDate;
  };

  get salary() {
    return this._salary;
  };

  get admissionDate() {
    return this._admissionDate;
  };

  get registration() {
    return this._registration;
  };

  generateRegistration() {
    const newid = uniqid();
    this._registration = newid;
    return newid;
  };
};

const prof1 = new Teacher('Diogo', new Date(1991, 7, 5), 4500, matematica, new Date());
const prof2 = new Teacher('Diogo', new Date(1991, 7, 5), 4500, historia, new Date(2022, 2, 3));
const prof3 = new Teacher('Diogo', new Date(1991, 7, 5), 4500, filosofia, new Date(2022, 2, 2));

console.log(prof1);
console.log(prof2);
console.log(prof3);
