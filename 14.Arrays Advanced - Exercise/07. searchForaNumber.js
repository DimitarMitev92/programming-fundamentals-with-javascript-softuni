function searchForANumber(firstArr, secondArr) {
    let removeElements = secondArr.shift();
    let secondRemoveEL = secondArr.shift();
    let searchingNum = secondArr.shift();

    let manipulatedArr = firstArr.splice(0, removeElements);
    manipulatedArr.splice(0, secondRemoveEL);
    let counter = 0;
    for (let num of manipulatedArr) {
        if (num === searchingNum) {
            counter++;
        }
    }
    console.log(`Number ${searchingNum} occurs ${counter} times.`);
}