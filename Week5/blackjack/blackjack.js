let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
let values = ['Ace', 'King', 'Queen', 'Jack', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
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
    return deck;
    }
}

var deal = () => {
    createCard('9_of_hearts', 'dealer');
    createCard('king_of_spades', 'dealer');
    createCard('jack_of_clubs', 'player');
    createCard('7_of_diamonds', 'player');
}
function createCard(value, person) {
    let card = document.createElement('img');
    card.src= 'images/' + value + '.png';
    card.setAttribute('class', 'card');
    document.getElementById(person + '-hand').appendChild(card);
}
document.getElementById('deal-button').addEventListener('click', deal);

var hit = () => {
    createCard('2_of_spades', 'player');
}
document.getElementById('hit-button').addEventListener('click', hit); 

calculatePoints ()

// hide deal button after first click
// // setTimeout
// $("deal-button").click(function () {
//     $("deal-button").attr("disabled", true).delay(2000).attr("disabled", false);
//   });

// document.getElementById("stand-button").addEventListener("click", stand); Stand
// $("playAgain-button").hide();