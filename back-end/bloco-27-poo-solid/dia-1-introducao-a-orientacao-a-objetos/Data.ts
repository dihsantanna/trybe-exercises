const febValidate = (day: number, month: number, year: number): boolean => {
  const checkDayFeb = day > 28 && month === 2 && year % 4 !== 0;
  const checkDayYearFeb = day > 29 && month === 2 && year % 4 === 0;

  return checkDayFeb || checkDayYearFeb;
}

const daysMonthValidate = (day: number, month: number): boolean => {
  if (month < 0 || month > 12) return true;
  const larger30 = day > 30;
  const month30 = (month % 2 === 0 && month < 8) || (month % 2 !== 0 && month > 8);

  return larger30 && month30;
}

type legend = {
  "dd/mm/aaaa": string
  "dd/mm/aa": string
  'aa/mm/dd': string
  "aaaa-mm-dd": string
  "aa-mm-dd": string
  "dd de M de aa": string
  "dd de M de aaaa": string
  "dd, M de aaaa": string
}

class Data {
  constructor(public day: number = 1, public month: number = 1, public year: number = 1900) {
    const check = day < 0 || day > 31 || year < 1900;
    const checkFeb = febValidate(day, month, year);
    const checkDayMouth =  daysMonthValidate(day, month);

    this.getMonthName = this.getMonthName.bind(this);

    if (check|| checkDayMouth || checkFeb) {
      this.day = 1;
      this.month = 1;
      this.year = 1900;
      return;
    }

    this.day = day;
    this.month = month;
    this.year = year;
  }

  getMonthName() {
    const months: string[] = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    return months[this.month - 1];
  }

  isLeapYear() {
    return this.year % 4 === 0;
  }

  compare(data: Data) {
    const { day, month, year } = data;
    if (year === this.year && month === this.month && day === this.day) return 0;
    if (year < this.year
      || (month < this.month && year === this.year)
      || (day < this.day && (year === this.year && month === this.month))) return -1;

    return 1;
  }

  format(format: keyof legend) {
    const { day, month, year, getMonthName} = this;
    const newDay = day < 10 ? `0${day}` : day;
    const newMonth = month < 10 ? `0${month}` : month;
    const monthName = getMonthName();
    const yearTwoDig = year.toString().slice(-2);
    const legend: legend = {
      "dd/mm/aaaa": `${newDay}/${newMonth}/${year}`,
      "dd/mm/aa": `${newDay}/${newMonth}/${yearTwoDig}`,
      'aa/mm/dd': `${yearTwoDig}/${newMonth}/${newDay}`,
      "aaaa-mm-dd": `${year}-${newMonth}-${newDay}`,
      "aa-mm-dd": `${yearTwoDig}-${newMonth}-${newDay}`,
      "dd de M de aa": `${newDay} de ${monthName} de ${yearTwoDig}`,
      "dd de M de aaaa":  `${newDay} de ${monthName} de ${year}`,
      "dd, M de aaaa": `${newDay}, ${monthName} de ${year}`
    }
    return legend[format];
  }
}

const data1 = new Data(3, 3, 2022);

console.log(data1.format('dd, M de aaaa'));