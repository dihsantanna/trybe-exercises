const prefBgColors = ['Branco', 'Preto', 'Amarelo', 'Verde', 'Azul', 'Rosa', 'Vermelho'];
const prefTxtColors = ['Preto','Branco', 'Amarelo', 'Verde', 'Azul', 'Rosa', 'Vermelho'];
const prefFontSize = ['14px', '15px', '16px', '17px', '18px', '19px', '20px'];
const prefLineHgt = ['4mm', '5mm', '6mm', '7mm','8mm', '9mm', '10mm'];
const prefFonts = ['Open Sans', 'Arial', 'Times New Roman', 'monospace','Impact', 'Courier New', 'Lucida Sans'];

// Adiciona lista com opções de cores de fundo.
const ulBgColor = document.querySelector('#bg-colors');
for (let index = 0; index < prefBgColors.length; index += 1) {
    let color = prefBgColors[index];
    let liColor = document.createElement('li');
    liColor.innerHTML = color;
    ulBgColor.appendChild(liColor);
}
// Adiciona lista com opções de cores para fonte.
const ulTxtColor = document.querySelector('#txt-colors');