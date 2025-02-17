//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createList = (array) => {
  document.write(`<ul>`);
  for (const arrayElement of array) {
    document.write(`<li>${arrayElement}</li>`);
  }
  document.write(`</ul>`);
}
