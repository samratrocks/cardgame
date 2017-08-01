function Deck() {
    // Object that holds the deck object.
    this.cards = []  // container for all the cards the deck has

    let suits = ['c', 'd', 'h', 's']
    let ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13]

    let clubsArray  = ranks.map((rank) => {
        return rank + 'c'
    })

    let diamondsArray = ranks.map((rank) => {
        return rank + 'd'
    })

    let heartsArray = ranks.map((rank) => {
        return rank + 'h'
    })

    let spadesArray = ranks.map((rank) => {
        return rank + 's'
    })

    this.cards = this.cards.concat(clubsArray).concat(diamondsArray).concat(heartsArray).concat(spadesArray)
}

Deck.prototype.shuffle = function() {

}

Deck.prototype.reset = function() {

}

Deck.prototype.deal = function(numberOfCardsToDeal) {
    let firstCard = this.cards.pop()
    let secondCard = this.cards.pop()

    return [firstCard, secondCard]
}




function Player() {
    // The human player is going to play the game
    // through the Player. It provides an interface to
    // the players
}

Player.prototype.check = function() {

}

Player.prototype.bet = function(amount) {

}

Player.prototype.fold = function() {

}

Player.prototype.toString = function() {
    // This is mainly for debugging purposes
}

function ComputerPlayer() {
    // This should just extend Player prototype and 
    // have a AI on top that peroforms the actions
}

function Game() {
    // The object that manages game state
    // Game is going to decide who
    // wins and how much and all that stuff
}

function Dealer() {
    // Poker doesn't really have an active dealer like blackjack
    // Players could very well function as the dealer but having
    // a seperate dealer will make things easier to deal with in the
    // future
}

Dealer.prototype.winningHand(firstHand, secondHand, communityCards) {
    // Input: firstHand, secondHand, communityCards
    // Output: {}
}


