function solve(input) {
    let inputLength = input.toString().length;
    let inputStr = input.toString();
    let inputArr = input.toString().split('');
    let sum = 0;
    for (let num of inputStr) {
        num = Number(num);
        sum += num;
    }
    let average = sum / inputLength;

    if (average > 5) {
        console.log(input);
    } else {
        while (average <= 5) {
            sum += 9;
            inputLength++;
            average = sum / inputLength;
            inputArr.push('9');
        }
        console.log(inputArr.join(''))
    }
}