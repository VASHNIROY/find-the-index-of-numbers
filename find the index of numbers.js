let numbers = [17, 31, 77, 20, 63];

let userInput = document.getElementById("userInput");
let buttonElement = document.getElementById("findBtn");
let spanElement = document.getElementById("indexOfNumber");

buttonElement.onclick = function() {
    let userInputValue = parseInt(userInput.value);
    let index = numbers.findIndex(function(eachItem) {
        if (eachItem === userInputValue) {
            return true;
        } else {
            return false;
        }
    });
    spanElement.textContent = index;
}