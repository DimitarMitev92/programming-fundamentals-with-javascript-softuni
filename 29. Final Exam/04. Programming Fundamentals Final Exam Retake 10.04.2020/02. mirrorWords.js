function mirrorWords(array) {
    let pattern = /([\@|\#]{1})([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm
    let text = array.shift();
    let match = text.match(pattern);
    let mirrorWordsArr = []
    if (match === null) {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`)
    } else {
        console.log(`${match.length} word pairs found!`);
        for (let word of match) {
            let tokens = word.split(/#{1,2}|@{1,2}/g);
            let firstWord = tokens[1];
            let secondWord = tokens[2];
            let reverseSecondWord = secondWord.split('').reverse().join('');
            if (firstWord === reverseSecondWord) {
                let result = `${firstWord} <=> ${secondWord}`
                mirrorWordsArr.push(result);
            }
        }
        if (mirrorWordsArr.length === 0) {
            console.log(`No mirror words!`)
        } else {
            console.log(`The mirror words are:`);
            console.log(mirrorWordsArr.join(', '));
        }
    }
}