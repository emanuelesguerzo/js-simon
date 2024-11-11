// Dati
const timerElem = document.querySelector(".timer");
const descriptionElem = document.querySelector(".description");
const rngFieldElem = document.querySelector(".rng-field");
const randomNumElem = document.querySelectorAll(".random-number");
const inputFieldElem = document.querySelector(".input-field");
const allInputs = document.querySelectorAll(".input-field input");
const btnFieldElem = document.querySelector(".btn-section");
const btnElem = document.querySelector(".btn");
const retryBtnElem = document.querySelector(".btn-retry");
const resultElem = document.querySelector(".result");
const randomNumbers = [];

// Numero Random
for (let i = 0; i < randomNumElem.length; i++) {
    const curNum = randomNum(1, 99);
    randomNumbers.push(curNum);
    randomNumElem[i].innerHTML = curNum;
}

// Countdown
let counter = 30;

const intervalId = setInterval(function() {
	timerElem.innerHTML = counter;
	counter--;

	if(counter < 0) {
        descriptionElem.classList.remove("d-none");
		rngFieldElem.classList.add("d-none");
        inputFieldElem.classList.remove("d-none");
        btnFieldElem.classList.remove("d-none");
        retryBtnElem.classList.remove("d-none");
		timerElem.innerHTML = "Scegli i tuoi numeri!";
		clearInterval(intervalId);
	}
}, 1000);

// Bottone Conferma
const userNum = [];

btnElem.addEventListener("click", function() {
    userNum.length = 0;
    let allValid = true;
    
    for (let i = 0; i < allInputs.length; i++) {
        let curNum = allInputs[i].value;

        if (curNum === "" || isNaN(curNum) || curNum < 1 || curNum > 99) {
            allValid = false;
            allInputs[i].classList.add("bg-danger"); 
        } else { 
            userNum.push(Number(curNum));
        }
    }

    if (!allValid) {
        resultElem.innerHTML = "Inserisci numeri validi (da 1 a 99) in tutti i campi.";
        return;
    }
    
    const correctNumbers = userNum.filter(function(num) {
       return randomNumbers.includes(num);
    });

    for (let i = 0; i < allInputs.length; i++) {
        let curNum = Number(allInputs[i].value);

        if (randomNumbers.includes(curNum)) {
            allInputs[i].classList.add("bg-success"); 
        } else {
            allInputs[i].classList.add("bg-danger"); 
        }
    }

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

// Bottone Reset
retryBtnElem.addEventListener("click", function() {
    window.location.reload();
})

///////////////
// FUNZIONI //
/////////////

// Numero Random
function randomNum(min, max) {
    const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
    return randomInt;
}

