function sumFristAndLast(arr) {
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());
    let result = firstEl + lastEl;
    console.log(result);
}