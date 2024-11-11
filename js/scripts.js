// Dati
const timerElem = document.querySelector(".timer");
const descriptionElem = document.querySelector(".description");
const rngFieldElem = document.querySelector(".rng-field");
const randomNumElem = document.querySelectorAll(".random-number");
const inputFieldElem = document.querySelector(".input-field");
const allInputs = document.querySelectorAll("input");
const btnFieldElem = document.querySelector(".btn-section");
const btnElem = document.querySelector(".btn");
const randomNumbers = [];

// Numero Random
for (let i = 0; i < randomNumElem.length; i++) {
    const curNum = randomNum(1, 99);
    randomNumbers.push(curNum);
    randomNumElem[i].innerHTML = curNum;
}

// Countdown
let counter = 5;

const intervalId = setInterval(function() {
	timerElem.innerHTML = counter;
	counter--;

	if(counter < 0) {
		rngFieldElem.classList.add("d-none")
        inputFieldElem.classList.remove("d-none");
        btnFieldElem.classList.remove("d-none");
		timerElem.innerHTML = "Scegli i tuoi numeri!";
		clearInterval(intervalId);
	}
	
}, 1000);

///////////////
// FUNZIONI //
/////////////

// Numero Random
function randomNum(min, max) {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    return randomInt;
}