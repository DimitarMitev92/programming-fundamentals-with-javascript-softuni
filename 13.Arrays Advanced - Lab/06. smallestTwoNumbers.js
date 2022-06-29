function smallestTwoNumbers(arr) {
    let resultArr = arr.sort((a, b) => a - b).slice(0, 2).join(' ');
    console.log(resultArr);
}