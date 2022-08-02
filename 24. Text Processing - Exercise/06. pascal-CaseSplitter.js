function pascalCaseSplitter(string) {
    let strCopy = string.slice(0);
    let resultArr = [];
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
            let remove = strCopy.slice(i);
            strCopy = strCopy.slice(0, i);
            resultArr.unshift(remove);
        }
    }
    console.log(resultArr.join(', '));
}