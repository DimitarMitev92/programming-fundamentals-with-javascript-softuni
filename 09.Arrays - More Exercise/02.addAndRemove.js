function solve(arr) {
    let newArray = [];
    let i = 1;
    for (let command of arr) {
        if (command === 'add') {
            newArray.push(i);
            i++
        } else if (command === 'remove') {
            newArray.pop();
            i++
        }
    }
    if (newArray.length > 0) {
        console.log(newArray.join(' '));
    } else {
        console.log('Empty');
    }
}