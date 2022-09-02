function numbers(str) {

    let arrayNum = str.split(' ').map(Number).sort((a, b) => b - a);
    let average = arrayNum.reduce(function (sum, value) {
        return sum + value;
    }, 0) / arrayNum.length;

    let resultArr = arrayNum.filter(x => x > average).slice(0, 5);

    resultArr.length > 0 ?
        console.log(resultArr.join(' ')) :
        console.log(`No`);
}