function hardWords(array) {
    let text = array.shift();
    let wordsArr = array.shift().sort((a, b) => b.length - a.length);
    let searchingWordsArr = wordsArr.map(x => x = '_'.repeat(x.length));
    for (let i = 0; i < searchingWordsArr.length; i++) {
        text = text.replace(searchingWordsArr[i], wordsArr[i])
    }
    console.log(text)
}