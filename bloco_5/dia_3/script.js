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

// Exercício 01 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
/*
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

function createMonthDays(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysId = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let date = dezDaysList[index];
        let liTag = document.createElement('li');
        if (date === 24 || date === 31) {
            liTag.className = 'day holiday';
            liTag.innerHTML = date;
            daysId.appendChild(liTag);
        } else if (date === 4 || date === 11 || date === 18) {
            liTag.className = 'day friday';
            liTag.innerHTML = date;
            daysId.appendChild(liTag);
        } else if (date === 25) {
            liTag.className = 'day holiday friday';
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

// Exercício 02 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
/*
Adicione a este botão a ID "btn-holiday" .

Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function createButtonHolidays(Feriados){
    const buttonContainer = document.querySelector('.buttons-container');
    const buttonHolidays = document.createElement('button');
    buttonHolidays.innerHTML = Feriados;
    buttonHolidays.id = 'btn-holidays';
    buttonContainer.appendChild(buttonHolidays);
}

createButtonHolidays('Feriados');

// Exercício 03 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
/*
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

function clickHolidays() {
    const buttonHolidays = document.querySelector('#btn-holidays');
    buttonHolidays.addEventListener('click', function() {
        const holiday = document.getElementsByClassName('holiday');
        for (let index = 0; index < holiday.length; index += 1) {
            if (holiday[index].style.backgroundColor === 'rgb(5, 212, 5)') {
                holiday[index].style.backgroundColor = 'rgb(238,238,238';
                holiday[index].style.color = '#666';
            } else {
                holiday[index].style.backgroundColor = 'rgb(5, 212, 5)';
                holiday[index].style.color = 'black';
            }
        }
    });
}
clickHolidays();

// Exerrcício 04 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
/*
Adicione a este botão o ID "btn-friday" .

Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function createButtonFriday(string) {
    const buttonContainer = document.querySelector('.buttons-container');
    const buttonFriday = document.createElement('button');
        buttonFriday.innerHTML = string;
        buttonFriday.id = 'btn-friday';
        buttonContainer.appendChild(buttonFriday);
}

createButtonFriday('Sexta-Feira');

// Exercício 05 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
/*
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

function clickFriday(sextaFeira) {
    const fridayDays = [ 4, 11, 18, 25];
    const buttonFriday = document.getElementById('btn-friday');
    buttonFriday.addEventListener('click', function() {
        const friday = document.getElementsByClassName('friday');
        for (let index = 0; index < friday.length; index += 1) {
            if (friday[index].innerHTML !== sextaFeira) {
                friday[index].innerHTML = sextaFeira;
            } else {
                friday[index].innerHTML = fridayDays[index];
            }
        }
    });
}

clickFriday('SEXTOU!');

// Exercício 06 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

//Dica - Propriedade: event.target .

function mouseEnterDay() {
    const days = document.querySelectorAll('.day');
    function mouseEnter(e) {
        e.target.style.fontSize = '30px';        
    }
    for (let index = 0; index < days.length; index += 1) {
        if (days[index].style.fontSize !== '30px')
        days[index].addEventListener('mouseenter', mouseEnter, false);
    }
}

mouseEnterDay();

function mouseLeave() {
    const days = document.querySelectorAll('.day');
    function mouseLeave(e) {
        e.target.style.fontSize = '20px';       
    }
    for (let index = 0; index < days.length; index += 1) {
        if (days[index].style.fontSize !== '20px') {
            days[index].addEventListener('mouseleave', mouseLeave, false); 
        }
    }
}

mouseLeave();

// Exercício 07 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
/*
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

function createTask(task) {
    const spanTag = document.createElement('span');
        spanTag.innerHTML = task;
        document.querySelector('.my-tasks').appendChild(spanTag);
}
createTask('Cozinhar');

// Exercício 08 - Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
/*
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

function createLegendTask(color) {
    const legendTask = document.createElement('div');
    legendTask.className = 'task';
    legendTask.style.backgroundColor = color;
    document.querySelector('.my-tasks').appendChild(legendTask);
}

createLegendTask('yellow');

// Exercício 09 - Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
/*
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/

function selectTask() {
    const task = document.getElementsByClassName('task');
    for (let index = 0; index < task.length; index += 1){
        task[index].addEventListener('click', function() {
            if (task[index].classList[1] === undefined) {
                task[index].classList.add('selected');
            } else {
                task[index].classList.remove('selected')
            }
        })
    }
}
selectTask();

// Exercício 10 - Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
/*
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/

function selectTaskDay() {
    const day = document.getElementsByClassName('day');
    for (let index = 0; index < day.length; index += 1) {
        day[index].addEventListener('click', function(event) {
            const taskSelect = document.querySelector('.selected');
            if (day[index].style.color !== taskSelect.style.backgroundColor) {
            event.target.style.color = taskSelect.style.backgroundColor;
            } else {
                event.target.style.color = 'rgb(119,119,119)';
            }
        })
    }
}

selectTaskDay();

/*const writeTask = document.getElementById('task-input');
const addTaskBtn = document.getElementById('btn-add');
addTaskBtn.addEventListener('click', function() {
    if (writeTask.value !== '') {
        const spanTag = document.createElement('span');
        spanTag.innerHTML = writeTask.value;
        document.querySelector('.my-tasks').appendChild(spanTag);
    }
})*/