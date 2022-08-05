function treasureFinder(array) {
    let numArr = array.shift().split(' ').map(Number);
    let line = array.shift();
    while (line !== 'find') {
        let resultArr = [];
        let resultNumArr = numArr;
        let lineLength = line.length;
        while (resultNumArr.length < lineLength) {
            resultNumArr = resultNumArr.concat(resultNumArr);
        }
        resultNumArr = resultNumArr.slice(0, lineLength);

        for (let i = 0; i < lineLength; i++) {
            let currentChar = String.fromCharCode(line[i].charCodeAt() - resultNumArr[i]);
            resultArr.push(currentChar)
        }
        let result = resultArr.join('')
        let tokens = result.split('&');
        let nameTreasure = tokens[1];
        let cordination = tokens[2].split('<')[1].slice(0, -1)
        console.log(`Found ${nameTreasure} at ${cordination}`)
        line = array.shift();
    }
}