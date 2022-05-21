function solve(num, prec) {
    if (prec > 15) {
        prec = 15
    }
    let number = Number(num.toFixed(prec))
    number = parseFloat(number);
    console.log(number)
}
