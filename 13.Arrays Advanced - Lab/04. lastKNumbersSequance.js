function solve(n, k) {
    let resultArr = [1];
    for (let i = 0; i < n - 1; i++) {
        let slicedArr = resultArr.slice(-k);
        let result = 0;
        for (let j = slicedArr.length - 1; j >= 0; j--) {
            result += slicedArr[j];
        }
        resultArr.push(result);
    }
    console.log(resultArr.join(' '));
}