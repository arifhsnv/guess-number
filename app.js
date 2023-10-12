const getNumber = Math.ceil(Math.random() * 100)
console.log(getNumber);
const number = document.querySelector(".number");
const newGame = document.querySelector(".btn-new");
const guessNumber = document.querySelector(".guess");
const progressFinish = document.querySelector(".progress");
const recordedNumber = document.querySelector(".recorded");

let otherFirstNumber = function () {
  if (getNumber < number.value) {
    recordedNumber.innerHTML = "number is higher!";
    progressFinish.value = progressFinish.value + 25;
  } else if (getNumber > number.value) {
    recordedNumber.innerHTML = "number is lower!";
    progressFinish.value = progressFinish.value + 25;
  } else {
    alert("congrats");
  }
  if (progressFinish.value === 100) {
    guessNumber.setAttribute("disabled", "disabled");
    number.setAttribute("disabled", "disabled");
  }
};
guessNumber.addEventListener("click", otherFirstNumber);

let newNumber= function () {
    progressFinish.value = 0;
    number.value = 0;
    guessNumber.removeAttribute("disabled", "disabled")
  number.removeAttribute("disabled", "disabled")
  recordedNumber.innerHTML="Your recorded Guesses:"
}
newGame.addEventListener("click",newNumber)



