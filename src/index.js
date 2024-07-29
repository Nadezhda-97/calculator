const out = document.querySelector('.calc-screen p');
const buttons = document.querySelector('.buttons');
const cleanButton = document.querySelector('.clean');

let firstItem = '';
let secondItem = '';
let sign = '';
let isFinish = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const signs = ['+', '-', 'x', '/'];

const cleanAll = () => {
  firstItem = '';
  secondItem = '';
  sign = '';
  isFinish = false;
  out.textContent = '0';
};

cleanButton.addEventListener('click', () => cleanAll());

buttons.addEventListener('click', (e) => {
  // если клик не на кнопку
  if (!e.target.classList.contains('btn')) return;
  
  // если клик на кнопку "очистить"
  if (e.target.classList.contains('clean')) return;

  out.textContent = '';

  // получить содержимое нажатой кнопки (какую кнопку нажали)
  const buttonContent = e.target.textContent;

  // если нажаты кнопки 0-9 или "."
  if (digits.includes(buttonContent)) {
    if (secondItem === '' && sign === '') {
      firstItem += buttonContent;
      out.textContent = firstItem;
    } else if (firstItem !== '' && secondItem !== '' && isFinish) {
      secondItem = buttonContent;
      isFinish = false;
      out.textContent = secondItem;
    } else {
      secondItem += buttonContent;
      out.textContent = secondItem;
    }

    return;
  }

  // если нажат знак операции
  if (signs.includes(buttonContent)) {
    sign = buttonContent;
    out.textContent = sign;
  }

  // если нажато "="
  if (buttonContent === '=') {
    if (secondItem === '') {
      secondItem = firstItem;
    }

    switch (sign) {
      case '+':
        firstItem = Number(firstItem) + Number(secondItem);
        break;
      case '-':
        firstItem = Number(firstItem) - Number(secondItem);
        break;
      case 'x':
        firstItem = Number(firstItem) * Number(secondItem);
        break;
      case '/':
        if (secondItem === '0') {
          out.textContent = 'Error';
          firstItem = '';
          secondItem = '';
          sign = '';
          return;
        }
        firstItem = Number(firstItem) / Number(secondItem);
        break;
      default:
        out.textContent = 'Oops';
        console.error('Something was wrong with signs');
    }

    isFinish = true;
    out.textContent = firstItem;
  }
});
