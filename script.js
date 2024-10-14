// 1 Create functions for all basic math operations
function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// 2 Store inputs into variable
let userNumber1 = 0;
let userNumber2 = 0;
let userOperator = 0;

// 3 create operate function with 3 parameters (operator, num1, num2) and call
// one of above functions

function operate(int1, int2, operator) {
  if (operator === "+") {
    return sum(int1, int2);
  } else if (operator === "-") {
    return subtract(int1, int2);
  } else if (operator === "*") {
    return multiply(int1, int2);
  } else if (operator === "/") {
    return divide(int1, int2);
  } else {
    return "Invalid operator";
  }
}

console.log(operate(50, 20, "*"));
