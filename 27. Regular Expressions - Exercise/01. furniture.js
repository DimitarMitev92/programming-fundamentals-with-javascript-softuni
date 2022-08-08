function solve(input) {
    let pattern = />>(?<product>\w+)<<(?<price>\d+[\.]?[\d]+)!(?<count>\d+)/gm;
    let sum = 0;
    let validProduct
    let command = input.shift();
    console.log(`Bought furniture:`);
    while (command !== 'Purchase') {
        while ((validProduct = pattern.exec(command)) !== null) {
            let product = validProduct.groups['product'];
            console.log(product)
            let price = validProduct.groups[`price`];
            let count = validProduct.groups[`count`];
            let total = price * count;
            sum += total
        }

        command = input.shift()
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}