const initialDate = document.querySelector('#datepicker');
// Adiciona estados dinamicamente ao campo de estados do form
const states = ["Escolha..." , "Acre" , "Alagoas" , "Amapá" , "Amazonas" , "Bahia" , "Ceará" , "Distrito Federal" , "Espírito Santo" , "Goiás" , "Maranhão" , "Mato Grosso" , "Mato Grosso do Sul" , "Minas Gerais" , "Pará" , "Paraíba" , "Paraná" , "Pernambuco" , "Piauí" , "Rio de Janeiro" , "Rio Grande do Norte" , "Rio Grande do Sul" , "Rondônia" , "Roraima" , "Santa Catarina" , "São Paulo" , "Sergipe" , "Tocantins"];
for (let index = 0; index < states.length; index += 1) {
    const state = states[index]
    const option = document.createElement('option');
    option.value = state;
    option.innerText = state;
    document.getElementById('select-state').appendChild(option);
}
// Validadores:
const picker = new Pikaday({
field: document.getElementById('datepicker'),
format: 'DD/MM/YYYY',
maxDate: moment().toDate(),
i18n: {
    previousMonth : 'Mês Anterior',
    nextMonth     : 'Próximo Mês',
    months        : ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    weekdays      : ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    weekdaysShort : ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
},
});
const inputName = document.querySelector('#name');
function nameValidate() {
    const fullName = inputName.value;
    if (fullName.length === 0) {
        inputName.classList.remove('correct')
        inputName.classList.add('erro');
        inputName.setAttribute('placeholder', '* Campo obrigatório');
        return false;
    } else if (fullName.length > 40) {
        inputName.classList.remove('correct')
        inputName.classList.add('erro');
        alert('Excedido o número de caracteres');
        return false;
    } else if (fullName.length < 7) {
        return false;
    } else {
        inputName.classList.remove('erro');
        inputName.classList.add('correct');
        return true;
    }
}
const inputEmail = document.querySelector('#email');
function emailValidate() {
    const email = inputEmail.value;
    if (email.length === 0) {
        inputEmail.classList.remove('correct')
        inputEmail.classList.add('erro');
        inputEmail.setAttribute('placeholder', '* Campo obrigatório');
        return false;
    } else if (email.length > 50) {
        inputEmail.classList.remove('correct')
        inputEmail.classList.add('erro');
        alert('Excedido o número de caracteres');
        return false;
    } else if (email.indexOf('@') === -1 || email.length < 3) {
        return false;
    } else {
        inputEmail.classList.remove('erro');
        inputEmail.classList.add('correct');
        return true;
    }
}
const inputCpf = document.querySelector('#input-cpf');
function cpfValidate() {
    const cpf = inputCpf.value;
    if (cpf.length === 0) {
        inputCpf.classList.remove('correct')
        inputCpf.classList.add('erro');
        inputCpf.setAttribute('placeholder', '* Campo obrigatório');
        return false;
    } else if (cpf.length > 11) {
        inputCpf.classList.remove('correct')
        inputCpf.classList.add('erro');
        alert('Excedido o número de caracteres');
        return false;
    } else if (cpf.length !== 11) {
        return false;
    } else {
        inputCpf.classList.remove('erro');
        inputCpf.classList.add('correct');
        return true;
    }
}
const inputAddress = document.querySelector('#input-address');
function addressValidate() {
    const address = inputAddress.value
    if (address.length === 0) {
        inputAddress.classList.remove('correct')
        inputAddress.classList.add('erro');
        inputAddress.setAttribute('placeholder', '* Campo obrigatório');
        return false;
    } else if (address.length > 200) {
        inputAddress.classList.remove('correct')
        inputAddress.classList.add('erro');
        alert('Excedido o número de caracteres');
        return false;
    } else if (address.length < 7) {
        return false;
    } else {
        inputAddress.classList.remove('erro');
        inputAddress.classList.add('correct');
        return true;
    }
}
const inputCity = document.querySelector('#input-city');
function cityValidate() {
    const city = inputCity.value
    if (city.length === 0) {
        inputCity.classList.remove('correct')
        inputCity.classList.add('erro');
        inputCity.setAttribute('placeholder', '* Campo obrigatório');
        return false;
    } else if (city.length > 28) {
        inputCity.classList.remove('correct')
        inputCity.classList.add('erro');
        alert('Excedido o número de caracteres');
        return false;
    } else if (city.length < 3) {
        return false;
    } else {
        inputCity.classList.remove('erro');
        inputCity.classList.add('correct');
        return true;
    }
}
const inputState = document.querySelector('#select-state');
function stateValidate() {
    if (inputState.value === inputState[0].value) {
        inputState.classList.remove('correct')
        inputState.classList.add('erro');
        return false;
    } else {
        inputState.classList.remove('erro');
        inputState.classList.add('correct');
        return true;
    }
}
const inputCurriculumSummary = document.querySelector('#curriculum-summary');
function curriculumSummaryValidate() {
    const curriculum = inputCurriculumSummary.value
    if (curriculum.length === 0) {
        inputCurriculumSummary.classList.remove('correct-txt')
        inputCurriculumSummary.classList.add('erro-txt');
        inputCurriculumSummary.setAttribute('placeholder', '* Campo obrigatório');
        return false;
    } else if (curriculum.length > 1000) {
        inputCurriculumSummary.classList.remove('correct-txt')
        inputCurriculumSummary.classList.add('erro-txt');
        alert('Excedido o número de caracteres');
        return false;
    } else if (curriculum.length < 50) {
        return false;
    } else {
        inputCurriculumSummary.classList.remove('erro-txt');
        inputCurriculumSummary.classList.add('correct-txt');
        return true;
    }
}
const inputOffice = document.querySelector('#input-office');
function officeValidate() {
    const office = inputOffice.value
    if (office.length === 0) {
        inputOffice.classList.remove('correct')
        inputOffice.classList.add('erro');
        inputOffice.setAttribute('placeholder', '* Campo obrigatório');
        return false;
    } else if (office.length > 40) {
        inputOffice.classList.remove('correct')
        inputOffice.classList.add('erro');
        alert('Excedido o número de caracteres');
        return false;
    } else if (office.length < 3) {
        return false;
    } else {
        inputOffice.classList.remove('erro');
        inputOffice.classList.add('correct');
        return true;
    }
}
const inputJobDescription = document.querySelector('#job-description');
function jobDescriptionValidate() {
    const jobDescription = inputJobDescription.value
    if (jobDescription.length === 0) {
        inputJobDescription.classList.remove('correct-txt')
        inputJobDescription.classList.add('erro-txt');
        inputJobDescription.setAttribute('placeholder', '* Campo obrigatório');
        return false;
    } else if (jobDescription.length > 500) {
        inputJobDescription.classList.remove('correct-txt')
        inputJobDescription.classList.add('erro-txt');
        alert('Excedido o número de caracteres');
        return false;
    } else {
        inputJobDescription.classList.remove('erro-txt');
        inputJobDescription.classList.add('correct-txt');
        return true;
    }
}
function dateOk() {
    if (initialDate.value.length === 0) {
        initialDate.classList.remove('correct')
        initialDate.classList.add('erro');
        initialDate.setAttribute('placeholder', '* Campo obrigatório');
        return false;
    } else {
        initialDate.classList.remove('erro');
        initialDate.classList.add('correct');
        return true;
    }
}
function isTrue() {
    if (nameValidate() &&
    emailValidate() &&
    cpfValidate() &&
    addressValidate() &&
    cityValidate() &&
    stateValidate() &&
    curriculumSummaryValidate() &&
    officeValidate() &&
    jobDescriptionValidate() &&
    dateOk() === true) {
        return true
    }
    return false;
}
inputName.addEventListener('keyup', nameValidate);
inputEmail.addEventListener('keyup', emailValidate);
inputCpf.addEventListener('keyup', cpfValidate);
inputAddress.addEventListener('keyup', addressValidate);
inputCity.addEventListener('keyup', cityValidate);
inputState.addEventListener('click', stateValidate);
inputCurriculumSummary.addEventListener('keyup', curriculumSummaryValidate);
inputOffice.addEventListener('keyup', officeValidate);
inputJobDescription.addEventListener('keyup', jobDescriptionValidate);
initialDate.addEventListener('focusout', dateOk);
const form = document.querySelector('#form');
const btnSubmit = document.querySelector('#button-submit');
btnSubmit.addEventListener('click', () => {
    nameValidate();
    emailValidate();
    cpfValidate();
    addressValidate();
    cityValidate();
    stateValidate();
    curriculumSummaryValidate();
    officeValidate();
    jobDescriptionValidate();
    dateOk();
    isTrue();
    form.addEventListener('click', (event) => {
        if (isTrue() === false) {
            event.preventDefault();
        }
    })
});