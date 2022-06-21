function orders(product, quantity) {
    let priceCoffee = 1.50;
    let priceWater = 1.00;
    let priceCoke = 1.40;
    let priceSnacks = 2.00;
    let totalSum = 0;
    if (product === 'coffee') {
        totalSum = priceCoffee * quantity;
    } else if (product === 'water') {
        totalSum = priceWater * quantity;
    } else if (product === 'coke') {
        totalSum = priceCoke * quantity;
    } else if (product === 'snacks') {
        totalSum = priceSnacks * quantity;
    }
    console.log(totalSum.toFixed(2));
}