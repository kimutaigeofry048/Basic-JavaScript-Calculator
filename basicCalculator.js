
//Take mathematical operation user wish to perform
const mathOperator  = prompt("Enter mathematical operator e.g +,-,/,*");

//take input for first number
const num1 = parseFloat(prompt("Enter first Digit"));

//take input for second number
const num2 = parseFloat(prompt("Enter second Digit"));

//Declare varriale to store results
let result;

//using if...else condtional statement
if (mathOperator == '+') {
    result = num1 + num2;
    console.log(result);
}
else if (mathOperator == '-') {
    result = num1 - num2;
    console.log(result);
}
else if (mathOperator == '/') {
    result = num1 / num2;
    console.log(result);
}
else if (mathOperator == '*') {
    result = num1 * num2;
    console.log(result);
}
//if non of the conditions is met...execute code below...
else{
    console.log('Invalid Operator');
}