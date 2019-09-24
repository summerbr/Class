let suits = ['hearts', 'clubs', 'spades', 'diamonds']
let values = ['ace', 'king', 'queen', 'jack', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let deck = createDeck()

var dealerHand = [];
var playerHand = [];

function createDeck() {
    let deck = [];
    for (let suit = 0; suit < suits.length; suit++) {
        for (let value = 0; value < values.length; value++)
        {
            let card = {
                suit: suits[suit],
                value: values[value]
            }
            deck.push(card);
        }
    }
    return deck;
}

function DealCards(hand, person) {
    var randomCard = deck[Math.floor(Math.random() * deck.length)];
    deck.pop(randomCard);
    hand.push(CreateCard(randomCard.value + '_of_' + randomCard.suit, person));
    return deck
}

function Deal() {
    DealCards(playerHand, 'player')
    DealCards(dealerHand, 'dealer')
    DealCards(playerHand, 'player')
    DealCards(dealerHand, 'dealer')
}
// link card & img to DOM
function CreateCard(value, person) {
    let card = document.createElement('img');
    card.src= 'images/' + value + '.png';
    card.setAttribute('class', 'card');
    document.getElementById(person + '-hand').appendChild(card);
}
// Initial Deal need to hide button after first click or timeout
document.getElementById('deal-button').addEventListener('click', function () {
    Deal(deck);
});

// Hit
function Hit() {
    DealCards(playerHand, 'player')
}
document.getElementById('hit-button').addEventListener('click', function () {
    Hit(deck);
}); 

function CalculatePoints (card) {
    switch(card.value) {
        case 'ace':
            return 1; 
        case '2':
            return 2;
        case '3':
            return 3;
        case '4':
            return 4;
        case '5':
            return 5;
        case '6':
            return 6;
        case '7':
            return 7;
        case '8':
            return 8;
        case '9':
            return 9;
        default: //king, queen, jack//
            return 10;
    }
}

// document.getElementById("stand-button").addEventListener("click", Stand()); 

// $("playAgain-button").hide();

// if(card.value == 'Ace'){
//     hasAce = true;
// }
// if(hasAce && score+10<=21){
//     return score+10;