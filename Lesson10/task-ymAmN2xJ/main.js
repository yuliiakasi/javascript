//Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів,
// та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const userForm = document.createElement('form');
userForm.classList.add('user-form');


const userName = document.createElement('input');
userName.setAttribute('type', 'text');
userName.setAttribute('placeholder', 'Enter your name...');

const userSurname = document.createElement('input');
userSurname.setAttribute('type', 'text');
userSurname.setAttribute('placeholder', 'Enter your surname...');

const userAge = document.createElement('input');
userAge.setAttribute('type', 'number');
userAge.setAttribute('placeholder', 'Enter your age...');

const btn = document.createElement('button');
btn.innerText = 'Submit';

document.body.appendChild(userForm);
userForm.append(userName, userSurname, userAge, btn);

const div = document.createElement('div');
div.classList.add('user-info');
document.body.appendChild(div);

btn.onclick = function (a) {
  a.preventDefault()
  const nameValue = userName.value;
  const surnameValue = userSurname.value;
  const ageValue = userAge.value;
  let obj = {nameValue, surnameValue, ageValue};
  console.log(obj);
  div.innerText = `Your name is ${nameValue}.
                   Your surname is ${surnameValue}.
                   Your age is ${ageValue}.`;
}

