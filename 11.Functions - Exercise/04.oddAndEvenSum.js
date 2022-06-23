function oddAndEvenSum(num) {
    let numArr = String(num).split('').map(Number);
    let sumOdd = 0;
    let sumEven = 0;
    for (let num of numArr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else if (num % 2 !== 0) {
            sumOdd += num
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}