 // описати колоду карт (від 6 до туза без джокерів)
 //  - знайти піковий туз
 //  - всі шістки
 //  - всі червоні карти
 //  - всі буби
 //  - всі трефи від 9 та більше
 //
 // {
 //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
 //     value: '', // '6'-'10', 'ace','jack','queen','king'
 //     color:'', // 'red','black'
 // }

const cardSuits = ['spade', 'diamond','heart', 'clubs'];
const cardValues = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

const cards = [];
 for (const suit of cardSuits) {
   for (const value of cardValues) {
      const card = {cardSuit: suit, cardValue: value};
      if (suit === 'diamond' || suit === 'heart') {
        card.cardColor = 'red';
      }
      else {
        card.cardColor = 'black';
      }
      cards.push(card);
   }
 }

console.log(cards);

console.log(cards.find(value => value.cardValue === 'ace' && value.cardSuit === 'spade'));
console.log(cards.filter(value => value.cardValue === '6'));
console.log(cards.filter(value => value.cardSuit === 'diamond'));
console.log(cards.filter(value => value.cardSuit === 'clubs' &&
    (value.cardValue === '9' || value.cardValue === '10'
      || value.cardValue === 'ace' || value.cardValue === 'jack'
      || value.cardValue === 'queen'|| value.cardValue === 'king'
    )
  ));

