let workingArray = [];
let storingArray = [];
let operator = 0;
let number = 0;

const maxLength = 10;

let display = document.querySelector(".display");
let log = document.querySelector(".log");

// Create event listener for each number (0-9)
let calcNumbers = [];
for (let i = 0; i < 10; i++) {
  calcNumbers[i] = document.getElementById([i] + "_button");
  // Click event listener
  calcNumbers[i].addEventListener("click", function () {
    numberEventHandler(i);
  });
  // Keyboard event listener
  document.addEventListener("keydown", function (event) {
    if (event.key === i.toString()) {
      numberEventHandler(i);
    }
  });
}

// Decimal number (.) event listeners
let dot = document.getElementById("dot_button");
dot.addEventListener("click", function () {
  // Before pushing it check if dot has already been used
  if (!workingArray.includes(".")) {
    dotEventHandler();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === ".") {
    if (!workingArray.includes(".")) {
      dotEventHandler();
    }
  }
});

// OPERATORS event listeners (click + keydown)
let plus = document.getElementById("add_button");
plus.addEventListener("click", function () {
  if (!storingArray.includes("+")) {
    plusEventHandler();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "+") {
    if (!storingArray.includes("+")) {
      plusEventHandler();
    }
  }
});

let minus = document.getElementById("minus_button");
minus.addEventListener("click", function () {
  if (!storingArray.includes("-")) {
    minusEventHandler();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "-") {
    if (!storingArray.includes("-")) {
      minusEventHandler();
    }
  }
});

let star = document.getElementById("star_button");
star.addEventListener("click", function () {
  if (!storingArray.includes("*")) {
    starEventHandler();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "*") {
    if (!storingArray.includes("*")) {
      starEventHandler();
    }
  }
});

let slash = document.getElementById("divide_button");
slash.addEventListener("click", function () {
  if (!storingArray.includes("/")) {
    slashEventHandler();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "/") {
    if (!storingArray.includes("/")) {
      slashEventHandler();
    }
  }
});

// Equal sign can ONLY be pressed on a calculator
let equal = document.getElementById("equal_button");
equal.addEventListener("click", function () {
  equalEventHandler();
});

let clearButton = document.getElementById("clear_button");
clearButton.addEventListener("click", function () {
  clearEventHandler();
});

let deleteButton = document.getElementById("delete_button");
deleteButton.addEventListener("click", function () {
  deleteEventHandler();
});

// Operation functions
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

// EVENT HANDLER FUNCTIONS
function numberEventHandler(num) {
  if (workingArray.length < 10) {
    workingArray.push(num);
    display.textContent = workingArray.join("");
  }
}

function plusEventHandler() {
  number = joinArray(workingArray);
  operator = "+";
  storingArray.push(number, operator);
  workingArray.splice(0, workingArray.length);
  log.textContent = storingArray.join(" ");
}

function minusEventHandler() {
  number = joinArray(workingArray);
  operator = "-";
  storingArray.push(number, operator);
  workingArray.splice(0, workingArray.length);
  log.textContent = storingArray.join(" ");
}

function starEventHandler() {
  number = joinArray(workingArray);
  operator = "*";
  storingArray.push(number, operator);
  workingArray.splice(0, workingArray.length);
  log.textContent = storingArray.join(" ");
}

function slashEventHandler() {
  number = joinArray(workingArray);
  operator = "/";
  storingArray.push(number, operator);
  workingArray.splice(0, workingArray.length);
  log.textContent = storingArray.join(" ");
}

function dotEventHandler() {
  workingArray.push(".");
  display.textContent = workingArray.join("");
}

function equalEventHandler() {
  number = joinArray(workingArray);
  storingArray.push(number);
  //console.log("UPDATED STORING ARRAY", storingArray);
  operate(Number(storingArray[0]), Number(storingArray[2]), operator);
  log.textContent = storingArray.join(" ");
  operator = 0;
  // Clear working array
  workingArray.splice(0, workingArray.length);
  console.log("CLEARED WORKING ARRAY AFTER RESULT", workingArray);
  storingArray.splice(0, storingArray.length);
  console.log("CLEARED STORING ARRAY AFTER RESULT", storingArray);
}

function clearEventHandler() {
  workingArray.splice(0, workingArray.length);
  storingArray.splice(0, storingArray.length);
  operator = 0;
  number = 0;
  display.textContent = 0;
  log.textContent = "";
}

function deleteEventHandler() {
  workingArray.pop();
  display.textContent = workingArray.join("");
  // Check if array is empty -> show 0
  if (workingArray[0] === undefined) {
    display.textContent = 0;
  }
}
