function solve(arr) {
    let sum = 0;
    for (let num of arr) {
        let currentNum = Number(num);
        if (currentNum % 2 === 0) {
            sum += currentNum
        }
    }
    console.log(sum)
}