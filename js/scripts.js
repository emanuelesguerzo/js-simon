// Dati
const timerElem = document.querySelector(".timer");
const rngFieldElem = document.querySelector(".rng-field");
const randomNumElem = document.querySelectorAll(".random-number");
const inputFieldElem = document.querySelector(".input-field");
const allInputs = document.querySelectorAll("input");
const btnElem = document.querySelector(".btn");
const randomNumbers = [];

for (let i = 0; i < randomNumElem.length; i++) {
    const randomValue = randomNum(1, 100);
    randomNumbers.push(randomValue);
    randomNumElem[i].innerHTML = randomValue;
}


///////////////
// FUNZIONI //
/////////////

// Numero Random
function randomNum(min, max) {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    return randomInt;
}