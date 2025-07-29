//створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
// та повідомити про це користувача
const input = document.createElement('input')
input.classList.add('question');
input.setAttribute('type', 'number');
input.setAttribute('placeholder', 'Enter your age...');
document.body.appendChild(input);

const btn = document.createElement('button');
btn.innerHTML = 'Submit';
document.body.appendChild(btn);

btn.onclick = function () {
  const age = input.value;
  if (age < 18 ) {
    console.log('Your age is less than 18 years');
  }
}

