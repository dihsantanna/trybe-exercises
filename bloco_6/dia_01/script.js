// Adiciona estados dinamicamente ao campo de estados do form
const states = ["Acre" , "Alagoas" , "Amapá" , "Amazonas" , "Bahia" , "Ceará" , "Distrito Federal" , "Espírito Santo" , "Goiás" , "Maranhão" , "Mato Grosso" , "Mato Grosso do Sul" , "Minas Gerais" , "Pará" , "Paraíba" , "Paraná" , "Pernambuco" , "Piauí" , "Rio de Janeiro" , "Rio Grande do Norte" , "Rio Grande do Sul" , "Rondônia" , "Roraima" , "Santa Catarina" , "São Paulo" , "Sergipe" , "Tocantins"];
for (let index = 0; index < states.length; index += 1) {
    const state = states[index]
    const option = document.createElement('option');
    option.value = state;
    option.innerText = state;
    document.getElementById('select-state').appendChild(option);
}
// Validador de data
document.querySelector('#button-submit').addEventListener('click', () => {
    const initialDate = document.querySelector('#initial-date');
    const date = initialDate.value
    switch (date.length !== 10) {
        case true:
       return alert('Verifique formato da data de inicio');
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
        return alert('Dia da data de inicio inválido');
    } else if (format !== '//') {
        return alert('Verifique formato da data de inicio');
    } else if (month < 1 || month > 12) {
        return alert('Mês da data de inicio inválido');
    } else if (year < 0) {
        return alert('Ano da data de inicio inválido');
    }
    });

