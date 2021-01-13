// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// List of all of cards
 const cardList = document.querySelectorAll('.card');

 const cardIndices = [];

// Get index of each card
 for (var i = 0; i < cardList.length; i++) {
     cardIndices.push(i);
 }

// Shuffle cards using copy of indices
 const shuffledCards = shuffle(cardIndices.slice());

// Grab the deck and clear the cards
 const deck = document.querySelector('.deck');
 deck.innerHTML = '';

// Loop through the shuffled cards and add to the deck
 for (var i = 0; i < shuffledCards.length; i++) {
     const currentCard = cardList[shuffledCards[i]];
     currentCard.className = 'card';
     deck.appendChild(currentCard);
 }

window.addEventListener('load', (event) => {
    let movesCounterElement = document.querySelector('.moves');
    movesCounterElement.textContent = 0;
});

let openCards = [];
let movesCounter = 0;
let matchedCards = 0;
let win = false;

function declareWin() {
    window.alert("You've finally matched all cards with " + movesCounter + " moves");
    win = false;
}

 deck.addEventListener('click', function(event) {

     function updateMoveCounter() {
         movesCounter += 1;
         let movesCounterElement = document.querySelector('.moves');
         movesCounterElement.textContent = movesCounter;
     }

     function updateMatches() {
         matchedCards += 1;
         if (matchedCards === shuffledCards.length / 2) {
             win = true;
         }
     }

     function showCardSymbol(evt) {
        evt.target.classList.add("open", "show");
        addOpenCard(event);
        updateMoveCounter();
     }

     function lockCards(firstCard, secondCard) {
         firstCard.classList.add("match");
         secondCard.classList.add("match");
         openCards = [];
         updateMatches();
     }

     function hideCards(firstCard, secondCard) {
         openCards = [];
         firstCard.classList.remove("open", "show");
         secondCard.classList.remove("open", "show");
     }

     function addOpenCard(evt) {
         openCards.push(evt.target);
     }

     if (!event.target.classList.contains("open", "show")) {
         showCardSymbol(event);
     }
    //  Check if two cards are the same
     if (openCards.length === 2) {
         if (openCards[0].childNodes[1].classList[1] === openCards[1].childNodes[1].classList[1]) {
             lockCards(openCards[0], openCards[1]);
         } else {
             hideCards(openCards[0], openCards[1]);
         }
     }
     if (win) {
         declareWin();
     }
 });
