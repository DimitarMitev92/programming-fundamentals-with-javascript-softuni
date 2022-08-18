function emojiDetector(array) {
    let text = array.shift();
    let patternNums = /[0-9]/g;
    let patternEmoji = /(\:{2}|\*{2})([A-Z][a-z]{2,})\1/gm
    let thresHold = text.match(patternNums).map(Number).reduce((a, num) => a * num, 1);
    console.log(`Cool threshold: ${thresHold}`);
    let match = text.match(patternEmoji);
    console.log(`${match.length} emojis found in the text. The cool ones are:`);
    let emojiObj = {};
    for (let emoji of match) {
        let onlyWord = emoji.slice(2, emoji.length - 2);
        let result = 0;
        for (let char of onlyWord) {
            let asciiiCodeChar = Number(char.charCodeAt());
            result += asciiiCodeChar;
        }
        emojiObj[emoji] = result
    }
    for (let emoji in emojiObj) {
        if (emojiObj[emoji] > thresHold) {
            console.log(emoji)
        }
    }
}