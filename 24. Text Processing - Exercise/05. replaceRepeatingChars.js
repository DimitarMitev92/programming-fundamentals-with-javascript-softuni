function replaceRepeatungChars(string) {
    let result = [string[0]];
    for (let char of string) {
        if (char !== result[result.length - 1]) {
            result.push(char);
        }
    }
    console.log(result.join(''))
}