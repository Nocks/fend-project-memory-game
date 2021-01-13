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

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
