function solve(arr) {
    let sizeField = Number(arr.shift());
    let indexesArr = arr.shift().split(' ');

    let newArr = [...Array(sizeField)].map(x => 0);

    for (let index of indexesArr) {
        let indexNum = Number(index)
        if (indexNum >= 0 && indexNum < newArr.length) {
            if (newArr[indexNum] === 0) {
                newArr[indexNum] = 1;
            }
        }
    }

    for (let line of arr) {
        let [index, direction, step] = line.split(' ');
        let indexNum = Number(index);
        let stepNum = Number(step);
        if (indexNum >= 0 && indexNum <= newArr.length - 1 && newArr[indexNum] === 1) {

            if (direction === 'right') {
                newArr.splice(indexNum, 1, 0);
                let stepPlusIndex = indexNum + stepNum;

                for (let i = 0; i < newArr.length; i++) {
                    if (newArr[stepPlusIndex] === 0) {
                        newArr.splice(stepPlusIndex, 1, 1);
                        break;
                    } else {
                        stepPlusIndex += stepNum;
                    }
                }
            } else if (direction === 'left') {
                newArr.splice(indexNum, 1, 0);
                let stepPlusIndex = indexNum - stepNum;

                for (let i = 0; i < newArr.length; i++) {
                    if (newArr[stepPlusIndex] === 0) {
                        newArr.splice(stepPlusIndex, 1, 1);
                        break;
                    } else {
                        stepPlusIndex -= stepNum;
                    }
                }
            }
        }
    }
    console.log(newArr.join(' '));
}