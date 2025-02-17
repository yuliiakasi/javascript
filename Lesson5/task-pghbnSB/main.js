//створити функцію яка повертає найменьше число з масиву

let minValue = (numbers) => {
    let min = numbers[0];
    for (const number of numbers) {
      if (number < min) {
        min = number
      }
    }
    return min;
}
