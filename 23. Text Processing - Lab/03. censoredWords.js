function censoredWords(str, word) {
    let replaceWord = word.replace(word, '*'.repeat(word.length))
    while (str.includes(word)) {
        str = str.replace(word, replaceWord)
    }
    console.log(str)
}