function solve(num, arr) {
    let newArr = []
    for (let i = 0; i < num; i++) {
        newArr.push(arr[num - 1 - i]);
    }
    console.log(newArr.join(' '))
}