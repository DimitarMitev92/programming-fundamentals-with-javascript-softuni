function valueOfString(array) {
    let text = array.shift();
    let typeCase = array.shift();
    let sum = 0;
    for (let char of text) {
        let asciiCodeChar = char.charCodeAt();
        if (typeCase === 'UPPERCASE') {
            if (asciiCodeChar >= 65 && asciiCodeChar <= 90) {
                sum += asciiCodeChar;
            }
        } else if (typeCase === 'LOWERCASE') {
            if (asciiCodeChar >= 97 && asciiCodeChar <= 122) {
                sum += asciiCodeChar;
            }
        }
    }
    console.log(`The total sum is: ${sum}`)
}