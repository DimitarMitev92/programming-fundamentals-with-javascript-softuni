function oddOccurrences(str) {
    let arrayStr = str.split(' ').map(x => x.toLowerCase());
    let result = {};

    for (let word of arrayStr) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }
    let arrayEntries = Object.entries(result).filter(([key, value]) => value % 2 !== 0);
    let printResult = '';
    for (let [word, value] of arrayEntries) {
        printResult += `${word} `;
    }
    console.log(printResult)
}