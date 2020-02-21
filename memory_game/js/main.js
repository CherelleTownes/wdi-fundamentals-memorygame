// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";
//
// console.log("User flipped" + " " + cardOne);
// console.log("User flipped" + " " + cardThree);

const cards = ["queen", "queen", "king", "king"];
cards;

const cardsInPlay =[];
cardsInPlay;

const cardOne = cards[0];
cardOne;

cardsInPlay.push("cardOne");
console.log("User flipped queen")

const cardTwo = cards[2];
cardTwo;

cardsInPlay.push("cardTwo");
console.log("User flipped king")

if (cardsInPlay[0] === cardsInPlay[2]) {
  alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[2]){
  alert ("Sorry, try again.")
}
