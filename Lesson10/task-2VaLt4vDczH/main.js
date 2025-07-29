//є сторінка, на якій є блок, в кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const div = document.createElement('div');

let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);

document.body.appendChild(div);
div.innerText = currentNumber;


