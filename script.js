const add = (x,y) => x + y; 

const subtract = (x,y) => x - y;

const multiply = (x,y) => x * y;

const divide = (x,y) => x / y;

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
const numBtn = document.querySelectorAll('#num');
const opBtn = document.querySelectorAll('.operator-key');
const eqBtn = document.querySelector('#equals');
const cBtn = document.querySelector('#clear');
const buttons = document.querySelectorAll('button');

let firstNum;
let operator;
let lastClicked;

buttons.forEach(button => {
    button.addEventListener
})

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (lastClicked === "operator-key") input.textContent = "";
        input.textContent += button.innerText;
        lastClicked = button.id;
    });
});

opBtn.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.id;
        firstNum = parseInt(input.textContent);
        lastClicked = button.className;
    });
});

eqBtn.addEventListener('click', () => {
    let secondNum = parseInt(input.textContent);
    input.textContent = operate(operator, firstNum, secondNum);
});

cBtn.addEventListener('click', () => {
    input.textContent = "";
});

//console.log(typeof parseInt(input.textContent))
