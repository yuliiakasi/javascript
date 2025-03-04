// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let users = [
  new User(1, 'Olga', 'Schmidt', 'olga@gmail.com', +2423567),
  new User(3, 'Dmitry', 'Robwef', 'dmitry@gmail.com', +346314),
  new User(2, 'Anna', 'Muller', 'anna@gmail.com', +1087942),
  new User(4, 'Leo', 'Rough', 'leo@gmail.com', +8034522),
  new User(5, 'Oleg', 'Robert', 'oleg@gmail.com', +1204323),
  new User(9, 'Svitlana', 'Tsoi', 'svitlana@gmail.com', +453701),
  new User(7, 'Daniil', 'Kuzmen', 'daniil@gmail.com', +13263701),
  new User(8, 'Julia', 'Elter', 'julia@gmail.com', +32524601),
  new User(6, 'Oksana', 'Sahar', 'oksana@gmail.com', +658110),
  new User(10, 'Stephen', 'Hoppf', 'srephen@gmail.com', +4602664),
];

const result = users.sort((a, b) => a.id-b.id);

