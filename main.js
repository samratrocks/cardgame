function Deck() {
	// Object that holds the deck object.
    let cards = []  // container for all the cards the deck has
}

Deck.prototype.shuffle = function() {

}

Deck.prototype.reset = function() {

}

Deck.prototype.deal = function(numberOfCardsToDeal) {

}


function Card(suit, rank) {
    this.suit = suit
    this.rank = rank
}

Card.prototype.toString = function() {
    console.log(`${rank} ${suit}`)
}

Card.prototype.isHigher = function(otherCard) {
	// Predicate to see if this card is
	// higher than the otherCard
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


