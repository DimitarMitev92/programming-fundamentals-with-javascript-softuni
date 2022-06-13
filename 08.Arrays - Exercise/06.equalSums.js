function solve(arr) {
    let index;
    let isEqualSums = false;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let sumLeft = 0;
        let sumRight = 0;
        if (i !== 0) {
            for (let j = 0; j < i; j++) {
                sumLeft += arr[j];
            }
            for (let k = i + 1; k < arr.length; k++) {
                sumRight += arr[k];
            }
            if (sumLeft === sumRight) {
                index = i;
                isEqualSums = true;
                break;
            } else {
                isEqualSums = false;
            }
        }
    }
    if (isEqualSums) {
        console.log(index);
    } else if (arr.length === 1) {
        console.log('0');
    } else {
        console.log('no');
    }
}