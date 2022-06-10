function solve(arrOne, arrTwo) {
    let isIndentical = true;
    let indexDiff;
    let sum = 0;
    for (let i = 0; i < arrOne.length; i++) {
        sum += Number(arrOne[i]);
        if (arrOne[i] !== arrTwo[i]) {
            indexDiff = i;
            isIndentical = false;
            break;
        }

    }

    if (isIndentical) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexDiff} index`)
    }
}