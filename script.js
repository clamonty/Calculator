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

