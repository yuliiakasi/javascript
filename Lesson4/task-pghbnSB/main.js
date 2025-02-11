let value = [124, 235, 3463, 67362, 0.5, -12425 ]

function minValue (array) {
  let min = array[0];
  for (const arrayElement of array) {
    if (arrayElement < min) {
      min = arrayElement
    }
  }
  return min;
}

console.log(minValue(value));
