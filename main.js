// const { number } = require("yargs");

const nums = document.querySelectorAll('.num')
const operator = document.querySelectorAll('.operator')

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
    operator = add(num1,num2) || subtract(num1,num2) || multiply(num1,num2) || divide(num1,num2)
    return operator
}


let storeNum = '';
let secondNum = '';
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



    