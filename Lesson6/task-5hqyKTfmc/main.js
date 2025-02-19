//- створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let numbers = [11, 21, 3];

function sortNums(array, direction) {
  if (direction === 'ascending') return array.sort((a, b) => a - b);
  if (direction === 'descending') return array.sort((a, b) => b - a);
}

