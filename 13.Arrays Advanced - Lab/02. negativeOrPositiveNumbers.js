function negativeOrPositiveNumbers(arr) {
    let resultArr = [];
    for (let num of arr) {
        let currentNum = Number(num);
        if (currentNum < 0) {
            resultArr.unshift(currentNum);
        } else {
            resultArr.push(currentNum)
        }
    }
    console.log(resultArr.join('\n'));
}