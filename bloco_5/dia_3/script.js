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
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysId = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index];
      let liTag = document.createElement('li');
      liTag.className = day;
      if (day === 24 || day === 25 || day === 31) {
          liTag.className = 'holiday';
          liTag.innerHTML = day;
          daysId.appendChild(liTag);
      } else if (day === 4 || day === 11 || day === 18 || day === 25) {
          liTag.className = 'friday';
          liTag.innerHTML = day;
          daysId.appendChild(liTag);
      } else {
          liTag.innerHTML = day;
          daysId.appendChild(liTag);
      }
  }