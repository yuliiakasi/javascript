// Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

let div = document.createElement('div');
div.id = 'text';
div.innerText = 'Lorem ipsum dolor sit.';

document.body.appendChild(div);

let btn = document.createElement('button');
btn.innerText = 'hide it';
document.body.appendChild(btn);

btn.onclick = function () {
  document.getElementById('text').style.display = 'none';
}
