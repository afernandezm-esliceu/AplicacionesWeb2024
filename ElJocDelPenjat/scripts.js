const time = document.querySelector("time");
const wordContainer = document.getElementById("wordContainer");
const startButton = document.getElementById('startButton');
const usedLettersElement = document.getElementById("usedLetters");

let selectWord;
let usedLetters;
let mistakes;
let hits;

const updateHangmanImage = () => {
    let imageNumber = Math.min(mistakes + 1, 7);
    hangmanImage.src = `img0${imageNumber}.svg`;
};

const startGame = () => {
    usedLetters = [];
    mistakes = 0;
    hits = 0;
    wordContainer.innerHTML = '';
    usedLettersElement.innerHTML = '';
    startButton.style.display = 'none';
    drawHangMan();
}

startButton.addEventListener('click', startGame);


let segundos = 0

function writetime(){
    segundos++

    if (segundos<10) segundos = segundos.toString().padStart(2, "0");

    time.textContent = `Tiempo: ${segundos} segundos`

}

function seetime(){
    setInterval(writetime, 1000);
}

seetime();

