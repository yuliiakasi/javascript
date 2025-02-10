let a = +prompt('Enter any number for a');
let b = +prompt('Ebter any number for b');

if (a>b) {
  console.log(a);
}

else if (a<b) {
  console.log(b);
}

else if (a===b) {
  console.log('You entered the same values');
}

else {
  console.log('You entered a value in an invalid format');
}
