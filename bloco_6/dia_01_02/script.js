// Adiciona estados dinamicamente ao campo de estados do form
const states = ["Acre" , "Alagoas" , "Amapá" , "Amazonas" , "Bahia" , "Ceará" , "Distrito Federal" , "Espírito Santo" , "Goiás" , "Maranhão" , "Mato Grosso" , "Mato Grosso do Sul" , "Minas Gerais" , "Pará" , "Paraíba" , "Paraná" , "Pernambuco" , "Piauí" , "Rio de Janeiro" , "Rio Grande do Norte" , "Rio Grande do Sul" , "Rondônia" , "Roraima" , "Santa Catarina" , "São Paulo" , "Sergipe" , "Tocantins"];
for (let index = 0; index < states.length; index += 1) {
    const state = states[index]
    const option = document.createElement('option');
    option.value = state;
    option.innerText = state;
    document.getElementById('select-state').appendChild(option);
}
// Validadores:
const btnSubmit = document.querySelector('#button-submit');
function dateValidate() {
    const initialDate = document.querySelector('#initial-date');
    const date = initialDate.value
    if (date.length === 0) {
        return alert('Preencha o campo Data de início.')
    }
    if (date.length !== 10) {
        return alert('Verifique formato da data de inicio.');
    }
    let day = '';
    let month = '';
    let year = '';
    let format = '';
    for (let index = 0; index < date.length; index += 1) {
        if (index < 2) {
            day += date[index];
        } else if (index === 3 || index === 4) {
            month += date[index];
        } else if (index > 5) {
            year += date[index];
        } else {
            format += date[index];
        }
    }
    if (day < 1 || day > 31) {
        return alert('Dia da data de inicio inválido.');
    } else if (format !== '//') {
        return alert('Verifique formato da data de inicio.');
    } else if (month < 1 || month > 12) {
        return alert('Mês da data de inicio inválido.');
    } else if (year < 0) {
        return alert('Ano da data de inicio inválido.');
    } else {
        return true;
    }
}
function nameValidate() {
    const inputName = document.querySelector('#full-name');
    const fullName = inputName.value
    if (fullName.length === 0) {
        return alert('Preencha o campo Nome.')
    }
    return true
}
function emailValidate() {
    const inputEmail = document.querySelector('#input-email');
    const email = inputEmail.value
    if (email.length === 0) {
        return alert('Preencha o campo E-mail.')
    }
}
function cpfValidate() {
    const inputCpf = document.querySelector('#input-cpf');
    const cpf = inputCpf.value
    if (cpf.length === 0) {
        return alert('Preencha o campo CPF.')
    }
}
function addressValidate() {
    const inputAddress = document.querySelector('#input-address');
    const address = inputAddress.value
    if (address.length === 0) {
        return alert('Preencha o campo Endereço.')
    }
}
function cityValidate() {
    const inputCity = document.querySelector('#input-city');
    const city = inputCity.value
    if (city.length === 0) {
        return alert('Preencha o campo Cidade.')
    }
}
function curriculumSummaryValidate() {
    const inputCurriculumSummary = document.querySelector('#curriculum-summary');
    const curriculumSummary = inputCurriculumSummary.value
    if (curriculumSummary.length === 0) {
        return alert('Preencha o campo Resumo do Currículo.')
    }
}
function officeValidate() {
    const inputOffice = document.querySelector('#input-office');
    const office = inputOffice.value
    if (office.length === 0) {
        return alert('Preencha o campo Cargo.')
    }
}
/*btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if 
});*/
