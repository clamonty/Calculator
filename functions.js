function add(x, y) {
  return x + y;
}
function subtract(x, u) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
function operate(operator, x, y) {
  return operator(x, y);
}

// Clear calculator display
function clear(display) {
  display.value = 0;
}

// Add digit to display value
function addDigit(display, num) {
  if (display.value == 0) {
    display.value = num;
  } else if (display.value != 0) {
    display.value += num;
  }
}

function displayToNum(display) {
  display.value = parseFloat(display.value);
}




