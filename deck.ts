export class Deck {

    public cards : Array<string>
    constructor() {
        this.cards = [
            '1c', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', '11c', '12c', '13c',
            '1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', '11d', '12d', '13d',
            '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h',
            '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', '11s', '12s', '13s',
        ]
    }
    
    public shuffle() {
        // Create a new deck of 52 cards
    }

    public reset() {

    }

    public deal() {
        let firstCard = this.cards.pop()
        let secondCard = this.cards.pop()

        return [firstCard, secondCard]
    }
}
