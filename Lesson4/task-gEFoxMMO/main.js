function arrayOfDate(array) {
  document.write('<ul>');
  for (const arrayElement of array) {
    document.write(`<li>${arrayElement}</li>`);
  }
  document.write('</ul>');
}
