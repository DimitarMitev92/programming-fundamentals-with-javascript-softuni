function addAndSubtract(firstNum, secondNum, thirdNum) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let resultSum = sum(firstNum, secondNum);
    let resultSubtract = subtract(resultSum, thirdNum);
    console.log(resultSubtract);
}