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