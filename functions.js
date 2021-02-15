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




