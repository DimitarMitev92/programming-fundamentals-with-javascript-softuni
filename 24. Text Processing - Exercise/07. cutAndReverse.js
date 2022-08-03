function cutAndReverse(string) {
    let firstPart = string.slice(0, string.length / 2).split('').reverse().join('');
    console.log(firstPart);
    let secondPart = string.slice(string.length / 2).split('').reverse().join('');
    console.log(secondPart)
}