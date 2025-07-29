//взяти https://dummyjson.com/docs/carts
// та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
  .then(value => value.json())
  .then(value => {

    const carts = value.carts;

    for (const cart of carts) {
      const div = document.createElement('div');
      div.classList.add('cart');
      document.body.appendChild(div);
      const divInfo = document.createElement('div');
      divInfo.innerText = `
                          discountedTotal: ${cart.discountedTotal}
                          id: ${cart.id}
                          total: ${cart.total}
                          totalProducts: ${cart.totalProducts}
                          totalQuantity: ${cart.totalQuantity}
                          userId: ${cart.userId}
                          `
      div.appendChild(divInfo);

      for (const product of cart.products) {

        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = `
                      discountPercentage: ${product.discountPercentage}
                      discountedTotal: ${product.discountedTotal}
                      id: ${product.id}
                      quantity: ${product.quantity}
                      title: ${product.title}
                      total: ${product.total}
        `
        const img = document.createElement('img');
        img.src = product.thumbnail;

        divInfo.appendChild(ul);
        ul.appendChild(li);
        li.append(p, img);


      }
    }
  });


