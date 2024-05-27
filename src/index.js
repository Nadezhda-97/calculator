const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', (e) => {
  if (!e.target.classList.contains('calc_btn')) {
    return;
  }

  const value = e.target.innerText;

  switch(value) {
    case 'C':
      result.innerText = '';
      break;  

    case '=':
      result.innerText = eval(result.innerText).toFixed(2);
      break;    

    default:
      result.innerText += value;
  }
});
