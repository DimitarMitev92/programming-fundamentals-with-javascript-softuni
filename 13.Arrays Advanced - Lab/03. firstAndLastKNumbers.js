function firstAndLastKNumbers(arr) {
    let numEl = Number(arr.shift());
    let firstElArr = arr.slice(0).slice(0, numEl);
    let lastELArr = arr.slice(0).slice(-numEl);
    console.log(firstElArr.join(' '));
    console.log(lastELArr.join(' '));
}