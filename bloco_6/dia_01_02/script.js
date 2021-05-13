let picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'DD/MM/YYYY',
});
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
