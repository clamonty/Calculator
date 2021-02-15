//////// FUNCTIONS /////////
// Add two numbers
const add = function(x, y) {
  return x + y;
}
// Subtract one number from another
const subtract = function(x, y) {
  return x - y;
}
// Multiply two numbers
const multiply = function(x, y) {
  return x * y;
}
// Divide one number by another
const divide = function(x, y) {
  return x / y;
}
// Negate a number
const negate = function(x) {
  return -x;
}
// Find the percentage of a number
const percent = function(x,y) {
  return x * (y / 100);
}
// Clear calculator display
const clear = function(display) {
  display.value = "";
}
// Perform an operation on two numbers
function operate(operator, x, y) {
  return operator(x, y);
}


// Convert display value to float, clear the display, and return the result
function getDisplay(display) {
  let result = parseFloat(display.value);
  clear(display);
  return result;
}

// Calculate the answer from the result array
function calculate(arr) {
  // Starting at index 1, move through to end of array performing operations in order
  let result = arr[0];
  for (let i = 1; i < arr.length; i+=2) {
    // No dividing by zero
    if (arr[i] == 'divide' && arr[i+1] == 0) {
      return "No dividing by zero!";
    }
    result = operate(getOperation(arr[i]), result, arr[i+1]);
  }
  // Return the final result
  return result;
}

// Return the operation function matching the parameter string
function getOperation(str) {
  switch(str) {
    case 'add':
      return add;
    case 'subtract':
      return subtract;
    case 'multiply':
      return multiply;
    case 'divide':
      return divide;
    case 'percent':
      return percent;
  }
}




////////// DOM INTERACTION //////////


const display = document.querySelector('input');
// Array to store entered numbers and operations
const result = [];

// Clear the current display
document.querySelector('.clear').addEventListener('click', () => {
  clear(display);
  result.length = 0;
});

// Update the display value when number keys are clicked
document.querySelectorAll('.numKey').forEach(numKey => {
  numKey.addEventListener('click', (e) => {
    display.value += e.target.textContent;
  });
});

// When operation key is pressed
document.querySelectorAll('.opKey').forEach(opKey => {
  opKey.addEventListener('click', (e) => {
    // If negate or delete key, update display value
    if (e.target.classList.contains('negate')) {
      display.value = negate(display.value);
      console.log(result);
    }
    else if (e.target.classList.contains('delete')) {
      display.value = display.value.substr(0, display.value.length - 1);
    }
    // If clear key, empty display value and result array
    else if (e.target.classList.contains('clear')) {
      clear(display);
      console.log(result);
    }
    // Otherwise store current display value and operation in result array, and clear display value
    else {
      result.push(getDisplay(display));
      result.push(e.target.classList[1]);
      console.log(result);
    }
  });
});

// Add decimal point to display value (only 1)
document.querySelector('.decKey').addEventListener('click', (e) => {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
});

// If nothing in display value, display zero
// Else calculate result, display the answer, and empty result array
document.querySelector('.eqKey').addEventListener('click', () => {
  if (display.value.length == 0) {
    display.value = "0";
  } else {
    result.push(getDisplay(display));
    let answer = calculate(result);
    display.value = answer;
    result.length = 0;
  }
});


// Keyboard support
// Add event listeners for every key on the keyboard
window.addEventListener('keydown', (e) => {
  // Save a reference to the DOM element matching the key code in memory
  const btn = document.querySelector(`button[data-key="${e.keyCode}"]`);
  // Click that DOM element
  btn.click();
})

