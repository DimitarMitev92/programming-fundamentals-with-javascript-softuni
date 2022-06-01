function solve(num) {
    let numString = num.toString();
    let sum = 0;
    for (let i = 0; i < numString.length; i++) {
        let currentNum = Number(numString[i]);
        sum += currentNum;
    }
    console.log(sum);
}