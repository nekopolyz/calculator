const buttons = document.querySelectorAll('button')

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

const display = function(){

}


buttons.forEach((button)=>{
    button.addEventListener('click',returnValue)});

let storeNum = '';
let screen = document.querySelector('.input');
function returnValue(number){
    // let button = n.target.id;
    // screen.textContent=button;
    storeNum += number.target.id;
    screen.textContent = storeNum;
    console.log(storeNum);
}
