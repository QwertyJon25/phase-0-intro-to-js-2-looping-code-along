// Code your solutions in this file

const cardNames = ["Gailyn", "Brinni", "Tiana"];

function writeCards(cardNames) {
  let thankYouCards = []
  for ( let i = 0; i < cardNames.length; i++ ) {
    thankYouCards.push( `Thank you, ${cardNames[i]}, for the wonderful birthday gift!`);
   debugger;
  }
  return thankYouCards
}
writeCards(cardNames);
//////////////////////////////////////
function countDown(9) {
  while ( 9 > 0 ) {
    console.log( 9 );
    9 -= 1;
  }
  console.log(9);
}
