function revealWords(words, sentence) {
    let wordsArr = words.split(', ').sort((a, b) => b.length - a.length);
    let censoredArr = wordsArr.map(el => '*'.repeat(el.length));
    for (let i = 0; i < censoredArr.length; i++) {
        sentence = sentence.replace(censoredArr[i], wordsArr[i])
    }

    console.log(sentence);
}