// const { number } = require("yargs");

const nums = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.operator')
const equalKey = document.querySelector('.is-equals')
const display = document.querySelector('.input');
const clearBtn = document.querySelector('.is-clear')

const add = function(a,b){
    return a + b;
}

const subtract = function(a,b){
    return a - b;
}

const multiply = function(a,b){
    return a * b;
}

const divide = function(a,b){
    return a / b;
}

const operate = function(operator,num1,num2){

    if (operator === '+'){
        return add(num1,num2);
    } 
    else if (operator === '-'){
        return subtract(num1,num2);
    }
    else if (operator === '÷'){
        return divide(num1,num2);
    }
    else if (operator === '×'){
        return multiply(num1,num2);
    }
    
}


let storeNum = '';
let clickedOperator = '';
let secondNum = '';
let result = '';
let storeResult ='';

// Clear button
clearBtn.addEventListener('click', clear);
function clear(){
    storeNum = '';
    clickedOperator = '';
    secondNum = '';
    result = '';
    display.textContent = "0";
}

// Num Buttons
nums.forEach((num)=>{
    num.addEventListener('click',returnValue)});

function returnValue(e){
    // let button = n.target.id;
    // screen.textContent=button;
    storeNum += e.target.id;
    display.textContent = storeNum;
    console.log(storeNum);
}

// Operator buttons
operators.forEach((operator =>{
    operator.addEventListener('click',function(){
        secondNum = storeNum;
        clickedOperator = operator.textContent;
        display.textContent = storeNum + clickedOperator;
        storeNum = '';
        console.log(`First  ${secondNum}  stored + ${storeNum}`);
        console.log(clickedOperator);
    })
}));

// calculation function 

const calculate = () => {
    const result = operate((clickedOperator),(secondNum),(storeNum));
    display.textContent = result;
    console.log(result);
    // storeResult = result;
    storeNum = result;
    console.log(`storeNum  ${storeNum}`);
    console.log("storeResult" +" "+ storeResult);
}

equalKey.addEventListener('click', calculate);




// function calculate(){
//     const result = operate((clickedOperator),(secondNum),(storeNum));
//     display.textContent = result;
//     console.log(result);
// }
    