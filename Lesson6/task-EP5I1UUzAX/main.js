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

const filteredCards = cards.reduce((acc, card) => {
  switch (card.cardSuit) {
    case 'spade':
      acc.spades.push(card);
      break;
    case 'diamond':
      acc.diamonds.push(card);
      break;
    case 'heart':
      acc.hearts.push(card);
      break;
    case 'clubs':
      acc.clubs.push(card);
      break;
  }
  return acc;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(filteredCards);
