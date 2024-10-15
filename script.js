let workingArray = [];
let storingArray = [];
let operator = 0;
let number = 0;
console.log(workingArray);

// Trying to display results
let display = document.querySelector(".display");
let log = document.querySelector(".log");

let one = document.getElementById("1_button");
one.addEventListener("click", function () {
  workingArray.push(1);
  console.log(workingArray);

  // DISPLAYING WORKS
  display.textContent = workingArray.join("");
});

let two = document.getElementById("2_button");
two.addEventListener("click", function () {
  workingArray.push(2);
  console.log(workingArray);

  // Start showing code when operator is pressed
  display.textContent = workingArray.join("");
});

let three = document.getElementById("3_button");
three.addEventListener("click", function () {
  workingArray.push(3);
  console.log(workingArray);

  display.textContent = workingArray.join("");
});

///////////////////////////////////////////////// EXPERIMENTAL
let calcNumbers = [];
for (let i = 4; i < 10; i++) {
  calcNumbers[i] = document.getElementById([i] + "_button");
  calcNumbers[i].addEventListener("click", function () {
    workingArray.push(i);
    display.textContent = workingArray.join("");
  });
}

///////////////////////////////////////////////////////////

let plus = document.getElementById("add_button");
plus.addEventListener("click", function () {
  number = joinArray(workingArray);
  console.log(joinArray(workingArray));
  operator = "+";
  console.log(operator);
  storingArray.push(number, operator);
  console.log(storingArray);
  workingArray.splice(0, workingArray.length);
  console.log("EMPTIED", workingArray);

  log.textContent = storingArray.join(" ");
});

let minus = document.getElementById("minus_button");
minus.addEventListener("click", function () {
  number = joinArray(workingArray);
  console.log(joinArray(workingArray));
  operator = "-";
  console.log(operator);
  storingArray.push(number, operator);
  console.log(storingArray);
  workingArray.splice(0, workingArray.length);
  console.log("EMPTIED", workingArray);
});

let star = document.getElementById("star_button");
star.addEventListener("click", function () {
  number = joinArray(workingArray);
  console.log(joinArray(workingArray));
  operator = "*";
  console.log(operator);
  storingArray.push(number, operator);
  console.log(storingArray);
  workingArray.splice(0, workingArray.length);
  console.log("EMPTIED", workingArray);
});

let slash = document.getElementById("divide_button");
slash.addEventListener("click", function () {
  number = joinArray(workingArray);
  console.log(joinArray(workingArray));
  operator = "/";
  console.log(operator);
  storingArray.push(number, operator);
  console.log(storingArray);
  workingArray.splice(0, workingArray.length);
  console.log("EMPTIED", workingArray);
});

function joinArray(workingArray) {
  return workingArray.join("");
}

let equal = document.getElementById("equal_button");
equal.addEventListener("click", function () {
  number = joinArray(workingArray);
  storingArray.push(number);

  console.log("UPDATED STORING ARRAY", storingArray);
  // CALL GIVEN FUNCTION BASED ON OPERND
  operate(Number(storingArray[0]), Number(storingArray[2]), operator);
  // WORKS!!!!
  // AFTER RESULT IS OUTPUTTED
  // Set operator to default value
  operator = 0;
  // Clear working array!
  workingArray.splice(0, workingArray.length);
  console.log("CLEARED WORKING ARRAY AFTER RESULT", workingArray);
  storingArray.splice(0, storingArray.length);
  console.log("CLEARED STORING ARRAY AFTER RESULT", storingArray);
});

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

function sum(a, b) {
  display.textContent = a + b;
  console.log("RESULT:", a + b);
  return a + b;
}

function subtract(a, b) {
  display.textContent = a - b;
  console.log("RESULT:", a - b);
  return a - b;
}

function multiply(a, b) {
  display.textContent = a * b;
  console.log("RESULT:", a * b);
  return a * b;
}

function divide(a, b) {
  display.textContent = a / b;
  console.log("RESULT:", a / b);
  return a / b;
}

// CLEAR BUTTON - Everything to default values
let clearButton = document.getElementById("clear_button");
clearButton.addEventListener("click", function () {
  workingArray.splice(0, workingArray.length);
  storingArray.splice(0, storingArray.length);
  operator = 0;
  number = 0;
  display.textContent = 0;
  log.textContent = 0;

  console.log(workingArray, storingArray, operator, number);
});

let deleteButton = document.getElementById("delete_button");
deleteButton.addEventListener("click", function () {
  workingArray.pop();
  console.log(workingArray);
  display.textContent = workingArray.join("");

  // If array is empty - show 0
  if (workingArray[0] === undefined) {
    display.textContent = 0;
  }
});

// NEXT TASKS:

// Figure out how to log out the ful equation
// Decimal numbers
// Add numbers 0, 4-9
// Try adding numbers with for loop
