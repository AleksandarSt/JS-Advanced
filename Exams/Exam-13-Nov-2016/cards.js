function cardDeckBuilder(selector) {
    let _map = new Map();
    _map.set('C', '\u2663');
    _map.set('D', '\u2666');
    _map.set('H', '\u2665');
    _map.set('S', '\u2660');

    let cards = [];

    return {

        addCard(face, suit) {
            let card = $('<div>')
                .addClass('card')
                .text(`${face} ${_map.get(suit)}`);
            $(selector).append(card);
            card.click(shuffle);

            cards.push(card);
        }
    };

    function shuffle() {
        let reversed = cards.reverse();
        $(selector).empty();
        cards = [];

        for (let i = 0; i < reversed.length; i++) {
            let card = reversed[i];
            $(selector).append(card);
            card.click(shuffle);
            cards.push(card)
        }
    }
}