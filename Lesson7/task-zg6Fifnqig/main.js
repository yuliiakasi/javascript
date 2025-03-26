//-створити класс/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// Сторити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}

class Prince {

  constructor(name, age, shoe) {
    this.name = name;
    this.age = age;
    this.shoe = shoe;
  }
}

const cinderellas = [
  new Cinderella('anna1', 20, 35),
  new Cinderella('anna2', 21, 36),
  new Cinderella('anna3', 22, 37),
  new Cinderella('anna4', 23, 38),
  new Cinderella('anna5', 24, 39),
  new Cinderella('anna6', 25, 40),
  new Cinderella('anna7', 26, 41),
  new Cinderella('anna8', 27, 42),
  new Cinderella('anna9', 28, 43),
  new Cinderella('anna10', 29, 44),
];

const prince = new Prince('vova', 27, 38);

for (const cinderella of cinderellas) {
  if (cinderella.footSize === prince.shoe) {
    prince.choice = cinderella;
    console.log(cinderella);
  }
}

princeChoice = cinderellas.find(value => value.footSize === prince.shoe);
console.log(princeChoice);
