function signCheck(firstNum, secondNum, thirdNum) {
    if (firstNum > 0 && secondNum > 0 && thirdNum > 0) {
        console.log(`Positive`);
    } else if (firstNum < 0 && secondNum > 0 && thirdNum > 0) {
        console.log(`Negative`);
    } else if (firstNum > 0 && secondNum < 0 && thirdNum > 0) {
        console.log(`Negative`);
    } else if (firstNum > 0 && secondNum > 0 && thirdNum < 0) {
        console.log(`Negative`);
    } else if (firstNum < 0 && secondNum < 0 && thirdNum > 0) {
        console.log(`Positive`);
    } else if (firstNum < 0 && secondNum > 0 && thirdNum < 0) {
        console.log(`Positive`);
    } else if (firstNum > 0 && secondNum < 0 && thirdNum < 0) {
        console.log(`Positive`);
    } else if (firstNum < 0 && secondNum < 0 && thirdNum < 0) {
        console.log(`Negative`);
    }
}