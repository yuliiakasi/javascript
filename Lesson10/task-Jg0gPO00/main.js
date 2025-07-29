const input = document.createElement('input');
input.setAttribute('type', 'number');
document.body.appendChild(input);

let p = document.createElement('p');
document.body.appendChild(p);

input.addEventListener('input', (e) => {
  const amount = input.value * 2.2046;
  p.innerText = amount;
});




