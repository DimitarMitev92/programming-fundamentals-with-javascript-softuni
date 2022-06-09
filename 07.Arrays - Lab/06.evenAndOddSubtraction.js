function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (let num of arr) {
        let currentNum = Number(num);
        if (currentNum % 2 === 0) {
            evenSum += currentNum
        } else {
            oddSum += currentNum
        }
    }
    let result = evenSum - oddSum;
    console.log(result)
}