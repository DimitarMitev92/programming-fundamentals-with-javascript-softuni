function solve(input) {

    let counterPairs = 0;

    let lengthInput = input.length;

    for (let i = 0; i < lengthInput; i++) {
        let currentArr = input[i];
        let currentArrLength = currentArr.length;
        for (let j = 0; j < currentArrLength; j++) {
            let currentEl = currentArr[j];
            let nextCurrentEl = currentArr[j + 1];
            if (currentEl === nextCurrentEl) {
                counterPairs++
            }

        }
    }

    for (let k = 0; k < lengthInput - 1; k++) {
        let currentArr = input[k];
        let currentArrLength = currentArr.length;
        for (let l = 0; l < currentArrLength; l++) {
            let currentEl = currentArr[l]
            let currentElDown = input[(k + 1)][l];
            if (currentEl === currentElDown) {
                counterPairs++
            }
        }
    }
    return counterPairs;
}