let result = (function () {

    // TODO: 

    return {
        Suits: {
            'SPADES': '♠',
            'HEARTS': '♥',
            'DIAMONDS': '♦',
            'CLUBS': '♣'
        },
        Card: class {
            constructor(face, suit) {
                let invalidFace;
                let invalidSuit;

                if (["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].includes(face)) {
                    this.face = face;
                } else {
                    invalidFace = true;
                }

                if (Object.values(Suits).includes(suit)) {
                    this.suit = suit;
                } else {
                    invalidSuit = true;
                }

                if (invalidFace) {
                    throw new Error('Invalid face');
                }

                if (invalidSuit) {
                    throw new Error('Invalid suit');
                }
            }
        }
    };
}());

let Card = result.Card;
let Suits = result.Suits;
console.log(Suits);

let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;
console.log(card);
let card2 = new Card('2', Suits.CLUBS); // Should throw Error
console.log(card2);

//expect(() => new Card("1", Suits.CLUBS)).to.throw(Error);
//expect(() => new Card("2", Suits.Pesho)).to.throw(Error);
//expect(() => new Card("3", 'hearts')).to.throw(Error);