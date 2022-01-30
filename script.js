const add = (x,y) => x + y; 

const subtract = (x,y) => x - y;

const multiply = (x,y) => x * y;

const divide = (x,y) => x / y;

let input; //calculator operation input via user

// likely wrong for now
const operate = (x,y) => {
    switch(input) {
        case "+":
            add(x,y);
            break;
        case "-":
            subtract(x,y);
            break;
        case "x":
            multiply(x,y);
            break;
        case "/":
            divide(x,y);
            break;
    }
};

