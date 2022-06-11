function solve(arrOne, arrTwo) {
    let newArr = [];
    for (let arrOneEl of arrOne) {
        for (let arrTwoEl of arrTwo) {
            if (arrOneEl === arrTwoEl) {
                newArr.push(arrOneEl);
            }
        }
    }
    console.log(newArr.join(`\n`));

}