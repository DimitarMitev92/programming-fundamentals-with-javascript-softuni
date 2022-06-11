function solve(arrOne, arrTwo) {
    let newArr = [];

    for (let i = 0; i < arrOne.length; i++) {
        if (i % 2 === 0) {
            let arrOneNum = Number(arrOne[i]);
            let arrTwoNum = Number(arrTwo[i]);
            let result = arrOneNum + arrTwoNum;
            newArr.push(result);
        } else {
            let arrOneNum = arrOne[i];
            let arrTwoNum = arrTwo[i];
            let result = arrOneNum + arrTwoNum;
            newArr.push(result);
        }
    }
    console.log(newArr.join(' - '));
}