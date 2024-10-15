let workingArray = [];
let storingArray = [];
let operator = 0;
let number = 0;

let display = document.querySelector(".display");
let log = document.querySelector(".log");

// Create event listener for each number (0-9)
let calcNumbers = [];
for (let i = 0; i < 10; i++) {
  calcNumbers[i] = document.getElementById([i] + "_button");

  // Click event listener
  calcNumbers[i].addEventListener("click", function () {
    workingArray.push(i);
    display.textContent = workingArray.join("");
  });

  // Key down event listener
  document.addEventListener("keydown", function (event) {
    if (event.key === i.toString()) {
      workingArray.push(i);
      display.textContent = workingArray.join("");
    }
  });
}
// EVENT LISTENERS - the code that executes if event happens is the same - frame it into a function
let plus = document.getElementById("add_button");
// CLICK EVENT LISTENER
plus.addEventListener("click", function () {
  number = joinArray(workingArray);
  operator = "+";
  storingArray.push(number, operator);
  workingArray.splice(0, workingArray.length);
  log.textContent = storingArray.join(" ");
});
// KEYBOARD EVENT LISTENER
document.addEventListener("keydown", function (event) {
  if (event.key === "+") {
    number = joinArray(workingArray);
    operator = "+";
    storingArray.push(number, operator);
    workingArray.splice(0, workingArray.length);
    log.textContent = storingArray.join(" ");
  }
});

let minus = document.getElementById("minus_button");
// CLICK EVENT LISTENER
minus.addEventListener("click", function () {
  number = joinArray(workingArray);
  operator = "-";
  storingArray.push(number, operator);
  workingArray.splice(0, workingArray.length);
  log.textContent = storingArray.join(" ");
});
// KEYBOARD EVENT LISTENER
document.addEventListener("keydown", function (event) {
  if (event.key === "-") {
    number = joinArray(workingArray);
    operator = "-";
    storingArray.push(number, operator);
    workingArray.splice(0, workingArray.length);
    log.textContent = storingArray.join(" ");
  }
});

let star = document.getElementById("star_button");
// CLICK EVENT LISTENER
star.addEventListener("click", function () {
  number = joinArray(workingArray);
  operator = "*";
  storingArray.push(number, operator);
  workingArray.splice(0, workingArray.length);
  log.textContent = storingArray.join(" ");
});
document.addEventListener("keydown", function (event) {
  if (event.key === "*") {
    number = joinArray(workingArray);
    operator = "*";
    storingArray.push(number, operator);
    workingArray.splice(0, workingArray.length);
    log.textContent = storingArray.join(" ");
  }
});

let slash = document.getElementById("divide_button");
// CLICK EVENT LISTENER
slash.addEventListener("click", function () {
  number = joinArray(workingArray);
  operator = "/";
  storingArray.push(number, operator);
  workingArray.splice(0, workingArray.length);
  log.textContent = storingArray.join(" ");
});
document.addEventListener("keydown", function (event) {
  if (event.key === "/") {
    number = joinArray(workingArray);
    operator = "/";
    storingArray.push(number, operator);
    workingArray.splice(0, workingArray.length);
    log.textContent = storingArray.join(" ");
  }
});

let dot = document.getElementById("dot_button");
dot.addEventListener("click", function () {
  // Before pushing it into an array - check if there already is a dot in the array
  if (!workingArray.includes(".")) {
    workingArray.push(".");
    display.textContent = workingArray.join("");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === ".") {
    if (!workingArray.includes(".")) {
      workingArray.push(".");
      display.textContent = workingArray.join("");
    }
  }
});

let equal = document.getElementById("equal_button");
equal.addEventListener("click", function () {
  number = joinArray(workingArray);
  storingArray.push(number);
  console.log("UPDATED STORING ARRAY", storingArray);
  // CALL GIVEN FUNCTION BASED ON OPERAND
  operate(Number(storingArray[0]), Number(storingArray[2]), operator);
  log.textContent = storingArray.join(" ");
  operator = 0;
  // Clear working array
  workingArray.splice(0, workingArray.length);
  console.log("CLEARED WORKING ARRAY AFTER RESULT", workingArray);
  storingArray.splice(0, storingArray.length);
  console.log("CLEARED STORING ARRAY AFTER RESULT", storingArray);
});

// CLEAR BUTTON - Everything to default values
let clearButton = document.getElementById("clear_button");
clearButton.addEventListener("click", function () {
  workingArray.splice(0, workingArray.length);
  storingArray.splice(0, storingArray.length);
  operator = 0;
  number = 0;
  display.textContent = 0;
  log.textContent = "";
});

let deleteButton = document.getElementById("delete_button");
deleteButton.addEventListener("click", function () {
  workingArray.pop();
  display.textContent = workingArray.join("");

  // Check if array is empty -> show 0
  if (workingArray[0] === undefined) {
    display.textContent = 0;
  }
});

function joinArray(workingArray) {
  return workingArray.join("");
}

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
}

function subtract(a, b) {
  display.textContent = a - b;
}

function multiply(a, b) {
  display.textContent = a * b;
}

function divide(a, b) {
  display.textContent = a / b;
}

// NEXT TASKS:
// Handle too long inputs / outputs
// Handle multiple operator being pressed consecutively + + +...
