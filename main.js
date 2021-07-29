// const { number } = require("yargs");
// Math.round(a / b * 100) / 100
// @ts-nocheck
const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const equalKey = document.querySelector('.is-equals');
const display = document.querySelector('.input');
const clearBtn = document.querySelector('.is-clear');


const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (num1, num2, operator) {

    if (operator === '+') {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return subtract(num1, num2);
    }
    else if (operator === '÷') {
        return divide(num1, num2);
    }
    else if (operator === '×') {
        return multiply(num1, num2);
    }

}


// @ts-nocheck
let storeNum = '';
let clickedOperator = '';
let secondclicked = '';
let secondNum = '';
let result = null;


// Clear button
clearBtn.addEventListener('click', clear);
function clear() {
    storeNum = '';
    clickedOperator = '';
    secondNum = '';
    result = '';
    display.textContent = 0;
}

// Num Buttons
nums.forEach((num) => {
    num.addEventListener('click', returnValue)
});

function returnValue(e) {
    storeNum += e.target.id;
    display.textContent = storeNum;


    console.log(`${typeof (storeNum)} = ${storeNum} << storeNum`);

}

// Operator buttons
operators.forEach((operator => {
    operator.addEventListener('click', function (e) {
        if (secondNum !== '') {
            const result = operate(parseFloat(secondNum), parseFloat(storeNum), (clickedOperator))
            display.textContent = result;
            console.log(result);
            storeNum = result;
        }

        clickedOperator = operator.textContent;

        display.textContent = storeNum;

        secondNum = storeNum;
        storeNum = '';


        console.log(`SecondNum = ${secondNum}  storedNum = ${storeNum}`);
        console.log(`${clickedOperator} << click operator`);

    })
}));



// press =

const calculate = () => {
    if (storeNum == ''){
        return;
    }
    const result = operate(Number(secondNum), Number(storeNum), (clickedOperator));
    secondNum = '';

    display.textContent = result;
    console.log(`${typeof (result)} = ${result} << Check type`);
    storeNum = result;
    console.log(`storeNum  ${storeNum} <<< storeNum  result - pressed = >>>>`);

}

equalKey.addEventListener('click', calculate);










