//– Є масив:
//
// [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let newArray = ['Main', 'Products', 'About us', 'Contacts'];

const menu = document.createElement('ul');
for ( const item of newArray ) {
  let li = document.createElement('li');
  li.innerText = item;
  menu.appendChild(li);
}

document.body.appendChild(menu);
