function solve(arr) {
    let assocArr = {};
    for (let word of arr) {
        let currentWord = word;
        let counter = 0;
        for (let word of arr) {
            let occursWord = word;
            if (currentWord === occursWord) {
                counter++;
            }
        }
        assocArr[currentWord] = counter;

    }
    let entries = Object.entries(assocArr);
    let sortedArr = entries.sort((a, b) => b[1] - a[1])
    for (let word of sortedArr) {
        console.log(`${word[0]} -> ${word[1]} times`)
    }
}