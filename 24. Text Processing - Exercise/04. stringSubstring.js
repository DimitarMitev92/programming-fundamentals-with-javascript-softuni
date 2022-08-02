function stringSubstring(word, text) {
    let wordLower = word.toLowerCase();
    let textArr = text.split(' ').map(x => x.toLowerCase());
    if (textArr.includes(wordLower)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}