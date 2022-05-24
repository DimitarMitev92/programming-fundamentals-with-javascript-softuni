function solve(input) {
    let goldPrice = 67.51;
    let priceBitcoin = 11949.16;
    let counterDays = 0;
    let totalSum = 0;
    let firstDay = 0;
    let buiedBitcoins = 0;
    let isBuyFirstBitcoin = false;
    for (let gold of input) {
        counterDays++;
        if (counterDays % 3 === 0) {
            let currentSum = gold * goldPrice * 0.7;
            if (currentSum < priceBitcoin) {
                totalSum += currentSum;
            } else {
                if (firstDay === 0) {
                    firstDay = counterDays;
                    isBuyFirstBitcoin = true;

                }
                totalSum += currentSum;
                let bitcoins = Math.floor(totalSum / priceBitcoin);
                if (bitcoins >= 1) {
                    totalSum -= priceBitcoin * bitcoins;
                    buiedBitcoins += bitcoins;
                }
            }
        } else {
            let currentSum = gold * goldPrice;
            if (currentSum < priceBitcoin) {
                totalSum += currentSum
            } else {
                if (firstDay === 0) {
                    firstDay = counterDays;
                    isBuyFirstBitcoin = true;
                }
                totalSum += currentSum;
                let bitcoins = Math.floor(totalSum / priceBitcoin);
                if (bitcoins >= 1) {
                    totalSum -= priceBitcoin * bitcoins;
                    buiedBitcoins += bitcoins;
                }
            }
        }
    }
    console.log(`Bought bitcoins: ${buiedBitcoins}`);
    if (isBuyFirstBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`)
}