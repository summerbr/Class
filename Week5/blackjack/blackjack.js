let dealerHand = [];
let playerHand = [];
let suits = ['hearts', 'clubs', 'spades', 'diamonds']
let values = ['ace', 'king', 'queen', 'jack', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let deck = createDeck()
let playerScore = 0;
let dealerScore = 0;

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

function dealCards(hand, person) {
    var randomCard = deck[Math.floor(Math.random() * deck.length)];
    deck.pop(randomCard);
    createCard(randomCard.value + '_of_' + randomCard.suit, person)
    hand.push(randomCard);
    // return deck
}

// Initial Deal 2 cards to each 
function deal() {
    dealCards(playerHand, 'player')
    dealCards(dealerHand, 'dealer')
    dealCards(playerHand, 'player')
    dealCards(dealerHand, 'dealer')
    getScore()
}
document.getElementById('deal-button').addEventListener('click', function () {
    deal(deck);
});

// link card & img to DOM
function createCard(value, person) {
    let card = document.createElement('img');
    card.src= 'images/' + value + '.png';
    card.setAttribute('class', 'card');
    document.getElementById(person + '-hand').appendChild(card);
}

// Hit - Deal 1 card per click to player only
function hit() {
    dealCards(playerHand, 'player')
    getScore()
}
document.getElementById('hit-button').addEventListener('click', function () {
    hit(deck);
}); 

// Stand - Deal 1 card to dealer on click 
function stand() {  
    var winner = dealer;
    while (dealerScore <= 17 && playerScore < 21) {
        dealCards(dealerHand, 'dealer')
        getScore()
        if (dealerScore === 21) {
            playerWon = false;
            gameOver = true;
            banner.textContent = 'Dealer wins!';
            break;
        }
    }
    // if (dealerScore < 20 && playerScore < 20) {
    //     playerWon = false;
    //     gameOver = true;
    //     banner.textContent = 'No winners. Try again!';
    // }
}
document.getElementById("stand-button").addEventListener('click', function () {
    stand(deck);
});

// Assign integer value to cards in array
function getCardValue (card) {
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

function calculatePoints(hand) {
    let score = 0;
    let hasAce = false;
    for (point = 0; point < hand.length; point++) {
        let card = hand[point];
        score += getCardValue(card);
        if (card.value === 'ace') {
            hasAce = true;
        }
        if (hasAce && score + 10 <= 21) {
            return score + 10;
        }
    }
    return score;
}

function getScore() {
    dealerScore = calculatePoints(dealerHand);
    playerScore = calculatePoints(playerHand);
    showScore('dealer', dealerScore + ' points');
    showScore('player', playerScore + ' points');
        if (playerScore > 21) {
            playerWon = false;
            gameOver = true;
            banner.textContent = 'Bust!';
        }
        if (dealerScore > playerScore && dealerScore > 21 || playerScore === 21) {
            playerWon = true;
            gameOver = true;
            banner.textContent = 'You Win!';
        }
}

function showScore(person, score) {
    let label = document.getElementById(person + "-points")
    label.textContent = score
}

let gameOver = false;
let banner = document.getElementById('messages');
if (gameOver) {
    while (dealerScore < playerScore && playerScore < 21 && dealerScore < 21){
        dealCards();
        getScore();
        hit();
        stand();
    }
    // resetGame()
}


// $("playAgain-button").hide();

// if(gameOver) {
//     newGameButton.style.display
//     'hit-button'.style.display = 'none';
//     'stand-button'.style.display = 'none';
// }