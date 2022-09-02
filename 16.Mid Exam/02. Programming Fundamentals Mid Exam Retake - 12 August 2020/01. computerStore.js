function solve(arr) {

    let type = arr.pop()
    let sum = 0;

    for (let price of arr) {
        let priceNum = Number(price);
        if (price < 0) {
            console.log(`Invalid price!`)
        } else {
            sum += priceNum;
        }
    }

    let taxes = 0.2 * sum;
    if (sum > 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`)
        if (type === 'regular') {
            let result = sum + taxes;
            console.log(`Total price: ${result.toFixed(2)}$`)
        } else if (type === 'special') {
            let result = (sum + taxes) * 0.9;
            console.log(`Total price: ${result.toFixed(2)}$`)

        }
    } else {
        console.log(`Invalid order!`)
    }
}