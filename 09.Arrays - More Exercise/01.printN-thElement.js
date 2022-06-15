function solve(input) {
    let step = Number(input.pop());
    let newArr = [];
    let index = 0;
    for (let i = 0; i < input.length; i++) {
        if (i === index) {
            newArr.push(input[i])
            index += step;
        }
    }
    console.log(newArr.join(' '))
}