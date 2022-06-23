function palindromeIntegers(arr) {
    let arrString = arr.map(String);

    for (let el of arrString) {
        let reverse = el.split('').reverse().join('');
        if (el === reverse) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}