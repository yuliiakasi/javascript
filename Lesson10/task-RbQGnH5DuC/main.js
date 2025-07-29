//В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// якa дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage (arrayName, objToAdd) {
  if (!localStorage.getItem(arrayName)) {
    throw new Error('No item with name "' + arrayName + '"');
  }
  const parse = JSON.parse(localStorage.getItem(arrayName));
  if (typeof objToAdd === 'object') {
    parse.push(objToAdd);
  }
  localStorage.setItem(arrayName, JSON.stringify(parse));

}

addToLocalStorage('sessions', {});



