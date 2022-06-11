function solve(arr) {
    let newArr = [];
    let originalSum = 0;
    let changeSum = 0;
    for (let i = 0; i < arr.length; i++) {

        let currentNum = Number(arr[i]);
        originalSum += currentNum
        if (currentNum % 2 === 0) {
            currentNum += i;
            newArr.push(currentNum);
        } else {
            currentNum -= i;
            newArr.push(currentNum);
        }
        changeSum += currentNum;
    }
    console.log(`[ ${newArr.join(', ')} ]`);
    console.log(originalSum);
    console.log(changeSum);

}