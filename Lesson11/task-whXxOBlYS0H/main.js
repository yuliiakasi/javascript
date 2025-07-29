//– взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
  .then(value => value.json())
  .then(value => {
    const recipes = value.recipes;
    for (const recipe of recipes) {

      console.log(recipe);

      //create div. class 'recipe'
      const div = document.createElement('div');
      div.classList.add('recipe');
      document.body.appendChild(div);

      //div.content
      const title = document.createElement('h3')
      title.innerText = recipe.name;

      const p = document.createElement('p');
      p.innerText = `
          Id: ${recipe.id}
          Calories:${recipe.caloriesPerServing}
          Difficult: ${recipe.difficulty}
          Cook time: ${recipe.cookTimeMinutes} minutes
          Type of meal: ${recipe.mealType.join(', ')}
          Preparation time: ${recipe.prepTimeMinutes} minutes
          Cuisine: ${recipe.cuisine}
          Rating: ${recipe.rating}
          Review: ${recipe.reviewCount}
          Servings: ${recipe.servings}
          Tags: ${recipe.tags.join(', ')}
          User id: ${recipe.userId}
          Instructions: ${recipe.instructions}
          Ingredients:
      `

      const ol = document.createElement('ol');
      div.append(title, p, ol);
      for (const ingredient of recipe.ingredients) {
        const li = document.createElement('li');
        li.innerText = ingredient;
        ol.appendChild(li);
      }

      const img = document.createElement('img');
      img.src = recipe.image;
      div.append(img);
    }
  });
