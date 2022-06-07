function solve(binary) {
    let binaryStr = binary.toString();
    let sum = 0;
    for (let i = 0; i <= binaryStr.length - 1; i++) {
        let currentNum = Number(binaryStr[i]);
        let result = currentNum * Math.pow(2, binaryStr.length - 1 - i);
        sum += result;
    }
    console.log(sum)
}