function secondExe(arr) {
    let cars = arr.shift().split('>>');
    let totalTaxes = 0;
    for (let carInfo of cars) {
        let [car, firstNum, secondNum] = carInfo.split(' ');
        let years = Number(firstNum);
        let km = Number(secondNum);

        if (!(car === 'family' || car === 'heavyDuty' || car === 'sports')) {
            console.log(`Invalid car type.`);
        } else {

            if (car === 'family') {
                let taxes = Math.trunc((km / 3000)) * 12 + (50 - years * 5);
                totalTaxes += taxes;
                console.log(`A ${car} car will pay ${taxes.toFixed(2)} euros in taxes.`)
            } else if (car === 'heavyDuty') {
                let taxes = Math.trunc((km / 9000)) * 14 + (80 - years * 8);
                console.log(`A ${car} car will pay ${taxes.toFixed(2)} euros in taxes.`)
                totalTaxes += taxes;
            } else if (car === 'sports') {
                let taxes = Math.trunc((km / 2000)) * 18 + (100 - years * 9);
                console.log(`A ${car} car will pay ${taxes.toFixed(2)} euros in taxes.`)
                totalTaxes += taxes;
            }

        }
    }
    console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`);
}
