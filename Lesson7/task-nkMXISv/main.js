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
  new Client(2, 'Vasya', 'Kotov', 'vasya@gmail.com', '+23523469', ['tablet', 'tv']),
  new Client(3, 'Vasya', 'Kotov', 'vasya@gmail.com', '+23523469', ['tablet', 'tv']),
  new Client(4, 'Vasya', 'Kotov', 'vasya@gmail.com', '+23523469', ['tablet', 'tv']),
  new Client(5, 'Vasya', 'Kotov', 'vasya@gmail.com', '+23523469', ['tablet', 'tv']),
  new Client(6, 'Vasya', 'Kotov', 'vasya@gmail.com', '+23523469', ['tablet', 'tv']),
  new Client(7, 'Vasya', 'Kotov', 'vasya@gmail.com', '+23523469', ['tablet', 'tv']),
  new Client(8, 'Vasya', 'Kotov', 'vasya@gmail.com', '+23523469', ['tablet', 'tv']),
  new Client(9, 'Vasya', 'Kotov', 'vasya@gmail.com', '+23523469', ['tablet', 'tv']),
  new Client(10, 'Vasya', 'Kotov', 'vasya@gmail.com', '+23523469', ['tablet', 'tv']),
]

