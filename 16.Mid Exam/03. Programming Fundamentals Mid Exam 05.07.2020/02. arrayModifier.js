function arrayModifier(arr) {
    let resultArr = arr.shift().split(' ').map(Number);
    let line = arr.shift();

    while (line !== 'end') {

        let [command, firstNum, secondNum] = line.split(' ');
        let index1 = Number(firstNum);
        let index2 = Number(secondNum);

        if (command === 'swap') {
            let buff = resultArr[index1];
            resultArr[index1] = resultArr[index2];
            resultArr[index2] = buff;
        } else if (command === 'multiply') {
            resultArr[index1] = resultArr[index1] * resultArr[index2];
        } else if (command === 'decrease') {
            resultArr = resultArr.map(element => element - 1);
        }
        line = arr.shift();
    }
    console.log(resultArr.join(', '))
}