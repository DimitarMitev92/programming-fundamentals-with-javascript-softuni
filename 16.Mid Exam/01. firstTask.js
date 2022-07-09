function firstExe(arr) {
    let budgetG = Number(arr.shift());
    let studentG = Number(arr.shift());
    let pricePackFlour = Number(arr.shift());
    let priceSingleEgg = Number(arr.shift());
    let priceSingleApron = Number(arr.shift());

    let freePackages = Math.trunc(studentG / 5);

    let resultPrice = priceSingleApron * Math.ceil(studentG + studentG * 0.2) + priceSingleEgg * 10 * studentG + pricePackFlour * (studentG - freePackages);

    if (budgetG >= resultPrice) {
        console.log(`Items purchased for ${resultPrice.toFixed(2)}$.`);
    } else {
        let needMoney = resultPrice - budgetG;
        console.log(`${needMoney.toFixed(2)}$ more needed.`)
    }

}