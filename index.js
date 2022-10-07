// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i <gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

const cards = ["Charlie", "Samip", "Ali"];

function writeCards(cards, occasion) {
    const shoppingCart = []
    for (let i = 0; i <cards.length; i++) {
        shoppingCart.push(`Thank you, ${cards[i]}, for the wonderful ${occasion} gift!`);
        debugger;
    }
    return shoppingCart;
}

writeCards(cards);


function countDown(number) {
    while (number <= 10 && number > -1) {
        console.log(number--)
    }
}

//function countDown() {
// let countDown = 10;
// while (countDown <= 10 && countDown >-1) {
//   console.log(countDown--);
//   }
// } 