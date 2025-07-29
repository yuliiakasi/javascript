// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

firstInput = document.createElement('input');
firstInput.classList.add('row');
firstInput.setAttribute('type', 'number');

secondInput = document.createElement('input');
secondInput.classList.add('line');
secondInput.setAttribute('type', 'number');

thirdInput = document.createElement('input');
thirdInput.classList.add('type');

btn = document.createElement('button');
btn.innerText = 'Submit';

table = document.createElement('table');

document.body.append(firstInput, secondInput, thirdInput, btn, table);

btn.onclick = function () {
  for (let i = 0; i < firstInput.value; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let j = 0; j < secondInput.value; j++) {
      const td = document.createElement('td');
      td.innerText = thirdInput.value;
      tr.appendChild(td);
    }
  }

}


