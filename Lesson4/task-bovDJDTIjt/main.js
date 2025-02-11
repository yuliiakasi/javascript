function usersInfo(array) {

  for (const arrayElement of array) {
    document.write(`<div>${arrayElement['id']} ${arrayElement['name']} ${arrayElement['age']}</div>`);
  }
}

