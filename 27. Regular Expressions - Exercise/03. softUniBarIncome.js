function solve(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^|$%.]*?(?<price>[0-9]+\.?[0-9]*)\$/gm;
    let line = input.shift();
    let totalSum = 0;
    let validLine;
    while (line !== 'end of shift') {
        while ((validLine = pattern.exec(line)) !== null) {
            let name = validLine.groups['name'];
            let product = validLine.groups['product'];
            let count = Number(validLine.groups['count']);
            let price = Number(validLine.groups['price']);
            let sum = count * price;
            totalSum += sum
            console.log(`${name}: ${product} - ${sum.toFixed(2)}`)
        }
        line = input.shift();
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}