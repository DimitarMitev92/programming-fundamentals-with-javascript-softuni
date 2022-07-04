function sorting(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let newArr = [];

    while (arr.length > 0) {
        let lastEl = arr.pop();
        newArr.push(lastEl);
        let firstEl = arr.shift();
        newArr.push(firstEl);
    }
    console.log(newArr.join(' '));
}