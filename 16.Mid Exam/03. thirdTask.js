function thirdExe(arr) {
    let cards = arr.shift().split(', ');
    let n = Number(arr.shift());

    if (n === 0) {
        console.log(cards.join(', '));
    } else {
        for (let line of arr) {
            let [command, firstEl, secondEl] = line.split(', ');
            if (command === 'Add') {
                let card = firstEl;
                if (cards.includes(card)) {
                    console.log(`Card is already in the deck`);
                } else {
                    cards.push(card);
                    console.log(`Card successfully added`);
                }
            } else if (command === 'Remove') {
                let card = firstEl;
                if (cards.includes(card)) {
                    if (cards.includes(card)) {
                        let index = Number(cards.indexOf(card));
                        cards.splice(index, 1);
                        console.log(`Card successfully removed`)
                    }
                } else {
                    console.log(`Card not found`);
                }
            } else if (command === 'Remove At') {
                let index = Number(firstEl);
                if (index >= 0 && index < cards.length) {
                    cards.splice(index, 1);
                    console.log(`Card successfully removed`)
                } else {
                    console.log(`Index out of range`);
                }
            } else if (command === 'Insert') {
                let index = Number(firstEl);
                let cardName = secondEl;
                if (index >= 0 && index < cards.length && !(cards.includes(cardName))) {
                    cards.splice(index, 0, cardName);
                    console.log(`Card successfully added`);
                } else if (index < 0 || index >= cards.length) {
                    console.log(`Index out of range`);
                } else if (cards.includes(cardName)) {
                    console.log(`Card is already added`);
                }
            }
        }
        console.log(cards.join(', '));
    }
}