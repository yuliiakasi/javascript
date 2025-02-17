//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let userInfo = (users) => {
  for (const user of users) {
    document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
  }
}
