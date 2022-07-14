function sequences(array) {
    let resultArr = []
    for (let currentArr of array) {
        currentArr = JSON.parse(currentArr).sort((a, b) => b - a);
        resultArr.push(currentArr);
    }
    resultArr = resultArr.map(x => JSON.stringify(x));
    resultArr = [...new Set(resultArr)];
    resultArr = resultArr.map(x => JSON.parse(x)).sort((a, b) => a.length - b.length);
    resultArr.forEach(el => console.log(`[${el.join(', ')}]`))
}