// const { number } = require("yargs");

const nums = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.operator')
const equalKey = document.querySelector('.is-equals')

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
    if (operator == '+'){
        return add(num1,num2)
    } 
    if (operator == '-'){
        return subtract(num1,num2)
    }
    if (operator == '÷'){
        return divide(num1,num2)
    }
    if (operator == '×'){
        return multiply(num1,num2)
    }
    
}


let storeNum = '';
let clickedOperator = '';
let secondNum = '';
let result = '';
let display = document.querySelector('.input');

nums.forEach((num)=>{
    num.addEventListener('click',returnValue)});

function returnValue(e){
    // let button = n.target.id;
    // screen.textContent=button;
    storeNum += e.target.id;
    display.textContent = storeNum;
    console.log(storeNum);
}

operators.forEach((operator =>{
    operator.addEventListener('click',function(){
        secondNum = storeNum;
        clickedOperator = operator.textContent;
        display.textContent = storeNum + clickedOperator;
        storeNum = '';
        console.log('First' + secondNum + "stored" + storeNum);
        console.log(clickedOperator);
    })
}));

equalKey.addEventListener('click', function(){
    const result = operate((clickedOperator),(secondNum),(storeNum));
    display.textContent = result;
    console.log(result);
});

// function calculate(){
//     const result = operate((clickedOperator),(secondNum),(storeNum));
//     display.textContent = result;
//     console.log(result);
// }
    