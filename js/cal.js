function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function calc(num1,num2,operator){
    return operator(num1,num2)
}

alert(calc(5,4,add));
alert(calc(5,4,sub));