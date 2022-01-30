const add = (x,y) => x + y; 

const subtract = (x,y) => x - y;

const multiply = (x,y) => x * y;

const divide = (x,y) => {
    if (y === 0) return "You bad boy."
    else return x / y;
}

const operate = (operator,x,y) => {
    switch(operator) {
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "x":
            return multiply(x,y);
        case "/":
            return divide(x,y);
    }
};

const input = document.querySelector('.input');
const operation = document.querySelector('.operation');
const numBtn = document.querySelectorAll('#num');
const opBtn = document.querySelectorAll('.operator-key');
const eqBtn = document.querySelector('#equals');
const cBtn = document.querySelector('#clear');
const buttons = document.querySelectorAll('button');

let firstNum;
let secondNum;
let operator;
let lastClicked;
let opPair = false;

const round = inputText => {
    if (inputText.length > 13) {
        return inputText.slice(0,13);
    } 

    return inputText;
}

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (!parseInt(input.textContent) || lastClicked === "=") input.textContent ="";

        if (lastClicked === "operator-key") {
            input.textContent = "";
            opPair = true;
        }
        
        input.textContent += button.innerText;
        input.textContent = round(input.textContent);
        lastClicked = button.id;
    });
});

opBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (lastClicked === "clear") return;

        if (opPair === true) {
            secondNum = parseInt(input.textContent);
            firstNum = operate(operator,firstNum,secondNum);
        } else {
            firstNum = parseInt(input.textContent);
        }

        operator = button.id;
        lastClicked = button.className;
        operation.textContent = `${firstNum} ${operator}`;
    });
});

eqBtn.addEventListener('click', () => {
    if (lastClicked === "operator-key" || opPair === false) {
        input.textContent = "ERROR";
        return;
    }
    
    operation.textContent = "";
    secondNum = parseInt(input.textContent); 
    input.textContent = operate(operator, firstNum, secondNum);
    input.textContent= round(input.textContent);
    lastClicked = "=";
    opPair = false;
});

cBtn.addEventListener('click', () => {
    input.textContent = "";
    operation.textContent = "";
    lastClicked = "clear";
    opPair = false;
    operator = "";
    firstNum = "";
    secondNum = "";
});

//console.log(typeof parseInt(input.textContent))
