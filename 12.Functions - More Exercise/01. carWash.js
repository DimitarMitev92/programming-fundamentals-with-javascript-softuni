function carWash(arr) {
    let cleaningResult = 0;
    for (let command of arr) {
        if (command === 'soap') {
            cleaningResult += 10;
        } else if (command === 'water') {
            cleaningResult = cleaningResult * 1.2;
        } else if (command === 'vacuum cleaner') {
            cleaningResult = cleaningResult * 1.25;
        } else if (command === 'mud') {
            cleaningResult = cleaningResult * 0.9;
        }
    }
    console.log(`The car is ${cleaningResult.toFixed(2)}% clean.`);
}