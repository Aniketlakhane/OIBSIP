const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    if (buttonText === 'AC') {
      display.textContent = '';
    } else if (buttonText === 'C') {
      display.textContent = display.textContent.slice(0, -1);
    } else if (buttonText === '=') {
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = 'Error';
        setTimeout(() => {
          display.textContent = '';
        }, 2000);
      }
    } else {
      display.textContent += buttonText;
    }
  });
});