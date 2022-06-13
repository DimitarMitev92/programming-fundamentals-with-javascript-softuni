function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        let isBigger = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (currentEl <= arr[j]) {
                isBigger = false
                break;
            }
        }
        if (isBigger) {
            newArr.push(currentEl);
        }
    }
    console.log(newArr.join(' '));
}