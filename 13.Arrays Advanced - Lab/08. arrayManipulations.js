function arrayManipulations(arr) {
    let array = arr.shift().split(' ').map(Number);
    for (let line of arr) {
        let [command, firstNum, secondNum] = line.split(' ');

        if (command === 'Add') {
            let number = Number(firstNum);
            array.push(number);
        } else if (command === 'Remove') {
            let number = Number(firstNum);
            for (let i = 0; i < array.length; i++) {
                if (number === array[i]) {
                    array.splice(i, 1);
                }
            }
        } else if (command === 'RemoveAt') {
            let index = Number(firstNum);
            array.splice(index, 1);
        } else if (command === 'Insert') {
            let number = Number(firstNum);
            let index = Number(secondNum);
            array.splice(index, 0, number);
        }
    }
    console.log(array.join(' '));
}