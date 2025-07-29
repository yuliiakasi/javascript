//За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
// Завдання робити через цикли.

//let text = document.createElement('h3')
//   text.innerText = course.title;
//   let duration = document.createElement('p')
//   duration.innerText = course.monthDuration;
//   document.body.append(block);
//   block.append(text, duration);

let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
  let div = document.createElement('div');
  div.classList.add('item');

  let title = document.createElement('h1');
  title.classList.add('heading');
  title.innerText = course.title;

  let duration = document.createElement('p');
  duration.classList.add('description');
  duration.innerText = course.monthDuration;

  document.body.appendChild(div);
  div.append(title, duration);
}
