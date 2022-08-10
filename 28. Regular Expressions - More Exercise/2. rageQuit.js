function solve(input) {
    let str = input[0]
    let result = '';
    let regexStr = /(\D+)/gm;
    let regexNum = /(\d+)/gm;
    let arrayNum = str.match(regexNum);
    let arrayStr = str.match(regexStr)

    for (let i = 0; i < arrayStr.length; i++) {
        let currentStr = arrayStr[i].toUpperCase();
        let currentNum = Number(arrayNum[i]);
        result += currentStr.repeat(currentNum);
    }
    let arrayResult = result.split('');
    let uniq = [...new Set(arrayResult)];
    let uniqLength = uniq.length;
    console.log(`Unique symbols used: ${uniqLength}`);
    console.log(result)
}