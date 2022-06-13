function solve(arr, rotations) {
    for (let i = 1; i <= rotations; i++) {
        let rotatedNum = arr.shift();
        arr.push(rotatedNum);
    }
    console.log(arr.join(' '));
}