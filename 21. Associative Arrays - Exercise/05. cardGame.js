function cardGame(array) {
    let playersObj = {};
    let cardsPower = {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let cardsTypes = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    for (let line of array) {
        let [name, cards] = line.split(': ');
        let cardsArr = cards.split(', ');
        for (let card of cardsArr) {
            if (playersObj.hasOwnProperty(name)) {
                if (!playersObj[name].includes(card))
                    playersObj[name].push(card);
            } else {
                playersObj[name] = [card];
            }
        }
    }
    for (let player in playersObj) {
        let sum = 0;
        for (let card of playersObj[player]) {
            let currentCardType = card.split('').pop();
            let currentCardPower = card.split('').slice(0, -1).join('');
            sum += cardsPower[currentCardPower] * cardsTypes[currentCardType];
        }

        console.log(`${player}: ${sum}`);
    }
}