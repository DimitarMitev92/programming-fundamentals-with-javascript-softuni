function solve(arr) {
    let newArr = [];
    let biggestNum = arr.shift();
    newArr.push(biggestNum);
    for (let currentNum of arr) {
        if (currentNum >= biggestNum) {
            newArr.push(currentNum);
            biggestNum = currentNum;
        }
    }
    console.log(newArr.join(' '));
}