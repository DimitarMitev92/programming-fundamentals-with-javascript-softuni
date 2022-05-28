function solve(num) {
    let numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        let currentNum = Number(numStr[i]);
        sum += currentNum;
    }

    let sumStr = sum.toString();
    let isIncludes = sumStr.includes('9');
    if (isIncludes) {
        console.log(`${num} Amazing? True`)
    } else {
        console.log(`${num} Amazing? False`);
    }
}