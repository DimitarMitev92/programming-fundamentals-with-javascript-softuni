function countStringOccurrences(str, word) {
    let counter = 0;
    let strArr = str.split(' ');
    while (strArr.includes(word)) {
        let index = strArr.indexOf(word)
        strArr.splice(index, 1);
        counter++
    }
    console.log(counter)
}