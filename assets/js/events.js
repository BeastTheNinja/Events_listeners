let myButtonValue = 0;
const myButtonResult = document.getElementById('buttonResult');
const myAddButton = document.getElementById('addButton');
const mySubButton = document.getElementById('subtractButton');
const myDiceRes = document.getElementById('diceResult');
const diceButton = document.getElementById('rollDiceOne');
const myLiveText = document.getElementById('myLiveText');
let myLiveTextResult = document.getElementById('tasteResult');

// Event listeners
myAddButton.addEventListener('click', addValue);
mySubButton.addEventListener('click', subtractValue);
diceButton.addEventListener('click', () => {
    let diceRoll = getRandomNumber(1, 6);
    showResult(diceRoll, myDiceRes);
});
myLiveText.addEventListener('keyup', (event) => {
    myLiveTextResult.textContent = `You typed: ${event.target.value}`;
});

// Function to show the result
function showResult(text, element) {
    element.textContent = text;
}

// Add value function
function addValue() {
    myButtonValue = myButtonValue + 1;
    showResult('værdi: ' + myButtonValue, myButtonResult);
}

// Subtract value function
function subtractValue() {
    myButtonValue = myButtonValue - 1;
    showResult('værdi: ' + myButtonValue, myButtonResult);
}

// Get random number function
function getRandomNumber(min, max) {
    let myMin = Math.ceil(min);
    let myMax = Math.floor(max);
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
