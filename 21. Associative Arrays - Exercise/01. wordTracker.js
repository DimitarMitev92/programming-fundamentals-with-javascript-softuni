function wordsTracker(data) {
    let myObj = {};
    let wordsArr = data.shift().split(" ");

    for (let word of wordsArr) {
        myObj[word] = 0;
    }
    for (let word of data) {
        if (myObj.hasOwnProperty(word)) {
            myObj[word]++;
        }
    }
    let sortedArr = Object.entries(myObj).sort((a, b) => b[1] - a[1]);

    sortedArr.forEach(el => {
        console.log(`${el[0]} - ${el[1]}`)
    });
}