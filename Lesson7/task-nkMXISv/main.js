//- створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, order) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
  this.order = order;
}

let clients = [
  new Client(1, 'Vasya', 'Kotov', 'vasya@gmail.com', '+23523469', ['tablet', 'tv']),
  new Client(2, 'Michael', 'Brown', 'michael@gmail.com', '+4575366', ['tablet', 'tv', 'phone']),
  new Client(3, 'Mathew', 'Thompson', 'mathew@gmail.com', '+01240524', ['tv']),
  new Client(4, 'Robert', 'Rios', 'rios@gmail.com', '+08672621', ['tablet', 'headphones', 'charger', 'dishwasher', 'powerbank']),
  new Client(5, 'Robert', 'Rowe', 'rowe@gmail.com', '+53464726', ['phone']),
  new Client(6, 'Alvin', 'Haynes', 'haynes@gmail.com', '+1323267', ['speaker', 'microphone']),
  new Client(7, 'Mildred', 'Webster', 'webster@gmail.com', '+457414', ['motherboard']),
  new Client(8, 'Ashley', 'Jenkins', 'jenkins@gmail.com', '+43205641', ['tablet', 'tv', 'cooler', 'receiver']),
  new Client(9, 'Phyllis', 'Martin', 'martin@gmail.com', '+23523469', ['phone']),
  new Client(10, 'Brenda', 'Garcia', 'garcia@gmail.com', '+3489636', ['projector', 'fridge', 'stove', 'soundbar']),
];



