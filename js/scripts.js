// Dati
const timerElem = document.querySelector(".timer");
const descriptionElem = document.querySelector(".description");
const rngFieldElem = document.querySelector(".rng-field");
const randomNumElem = document.querySelectorAll(".random-number");
const inputFieldElem = document.querySelector(".input-field");
const allInputs = document.querySelectorAll(".input-field input");
const btnFieldElem = document.querySelector(".btn-section");
const btnElem = document.querySelector(".btn");
const resultElem = document.querySelector(".result")
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

// Bottone
const userNum = [];

btnElem.addEventListener("click", function() {
    userNum.length = 0;
    
    for (let i = 0; i < allInputs.length; i++) {
        userNum.push(Number(allInputs[i].value));
    }

    const correctNumbers = userNum.filter(function(sum) {
       return randomNumbers.includes(sum);
    });

    if (correctNumbers.length === 5) {
        timerElem.innerHTML= `Sei un campione!`
        resultElem.innerHTML = `Hai indovinato tutti i numeri! (${correctNumbers.join(", ")})`;
    } else if (correctNumbers.length === 1) {
        resultElem.innerHTML = `Hai indovinato ${correctNumbers.length} numero! (${correctNumbers.join(", ")})`;
    } else if (correctNumbers.length === 0) {
        timerElem.innerHTML= `Che peccato!`
        resultElem.innerHTML = `Hai indovinato ${correctNumbers.length} numeri! Riprova!`;
    } else {
        resultElem.innerHTML = `Hai indovinato ${correctNumbers.length} numeri! (${correctNumbers.join(", ")})`;
    }

});

///////////////
// FUNZIONI //
/////////////

// Numero Random
function randomNum(min, max) {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    return randomInt;
}

