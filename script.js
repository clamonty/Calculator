const display = document.querySelector('input');


document.querySelector('.clear').addEventListener('click', () => {
  clear(display);
});

document.querySelectorAll('.numKey').forEach(numKey => {
  numKey.addEventListener('click', (e) => {
    let keyVal = e.target.textContent;
    addDigit(display, keyVal);
  });
});

