// pobieramy wszystkie potrzebne elementy z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

// okreslamy potrzebne dane

let textSize = 20;
text.style.fontSize = textSize + "px";
text.style.backgroundColor = "#ddd";
// ustawienie nasłuchiwania na przyciskach klikniecia
btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);



// Okreslenie akcji - napisanie funkcji
function textIncrease() {
    // console.log('klik!')
    textSize++;
    text.style.fontSize = textSize + "px";
}

function textDecrease() {
    // console.log('klik!')
    textSize--;
    text.style.fontSize = textSize + "px";
}