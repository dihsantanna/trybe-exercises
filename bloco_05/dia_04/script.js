const prefBgColors = ['Branco', 'Preto', 'Amarelo', 'Verde', 'Azul', 'Rosa', 'Vermelho'];
const prefTxtColors = ['Preto','Branco', 'Amarelo', 'Verde', 'Azul', 'Rosa', 'Vermelho'];
const prefFonts = ['Open Sans', 'Arial', 'Times New Roman', 'monospace','Impact', 'Courier New', 'Lucida Sans'];
const prefFontSize = ['14px', '15px', '16px', '17px', '18px', '19px', '20px'];
const prefLineHgt = ['4mm', '5mm', '6mm', '7mm','8mm', '9mm', '10mm'];
// Adiciona lista com opções de cores de fundo.
const ulBgColor = document.querySelector('#bg-colors');
for (let index = 0; index < prefBgColors.length; index += 1) {
    let colorBg = prefBgColors[index];
    let liColorBg = document.createElement('li');
    liColorBg.innerHTML = colorBg;
    ulBgColor.appendChild(liColorBg);
}
// Adiciona lista com opções de cores para fonte.
const ulTxtColor = document.querySelector('#txt-colors');
for (let index = 0; index < prefTxtColors.length; index += 1) {
    let colorTxt = prefTxtColors[index];
    let liColorTxt = document.createElement('li');
    liColorTxt.innerHTML = colorTxt;
    ulTxtColor.appendChild(liColorTxt);
}
// Adiciona lista com opções de tipos de fontes
const ultFonts = document.querySelector('#fonts');
for (let index = 0; index < prefFonts.length; index += 1) {
    let fontType = prefFonts[index];
    let liFont = document.createElement('li');
    liFont.innerHTML = fontType;
    ultFonts.appendChild(liFont);
}