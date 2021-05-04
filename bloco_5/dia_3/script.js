function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// Exercício 01
function createMonthDays(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysId = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let date = dezDaysList[index];
        let liTag = document.createElement('li');
        if (date === 24 || date === 25 || date === 31) {
            liTag.className = 'day holiday';
            liTag.innerHTML = date;
            daysId.appendChild(liTag);
        } else if (date === 4 || date === 11 || date === 18 || date === 25) {
            liTag.className = 'day friday';
            liTag.innerHTML = date;
            daysId.appendChild(liTag);
        } else {
            liTag.className = 'day';
            liTag.innerHTML = date;
            daysId.appendChild(liTag);
        }
    }
}

createMonthDays();

// Exercício 02
function createButtonHolidays(Feriados){
    const buttonContainer = document.querySelector('.buttons-container');
    const buttonHolidays = document.createElement('button');
    buttonHolidays.innerHTML = Feriados;
    buttonHolidays.id = 'btn-holidays';
    buttonContainer.appendChild(buttonHolidays);
}

createButtonHolidays('Feriados');

// Exercício 03
function clickHolidays() {
    const buttonHolidays = document.querySelector('#btn-holidays');
    buttonHolidays.addEventListener('click', function() {
        const holiday = document.getElementsByClassName('holiday');
        for (let index = 0; index < holiday.length; index += 1) {
            if (holiday[index].style.backgroundColor === 'rgb(5, 212, 5)') {
                holiday[index].style.backgroundColor = 'rgb(238,238,238';
                holiday[index].style.border = 'none';
                holiday[index].style.color = '#666';
            } else {
                holiday[index].style.backgroundColor = 'rgb(5, 212, 5)';
                holiday[index].style.border = '2px solid black';
                holiday[index].style.color = 'black';
            }
        }
    });
}
clickHolidays();