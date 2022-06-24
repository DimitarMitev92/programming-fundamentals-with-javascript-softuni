function perfectNumber(num) {
    let sum = 0;
    let isNotPerfect = true;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
        if (sum === num) {
            isNotPerfect = false;
            break;
        }
    }
    if (isNotPerfect) {
        console.log(`It's not so perfect.`);
    } else {
        console.log(`We have a perfect number!`);
    }
}