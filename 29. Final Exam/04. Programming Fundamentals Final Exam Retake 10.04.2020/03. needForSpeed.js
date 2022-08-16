function needForSpeed(array) {
    let num = Number(array.shift());
    let carList = {};

    for (let i = 0; i < num; i++) {
        let currentCar = array.shift();
        let [car, mileage, fuel] = currentCar.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        carList[car] = {};
        carList[car]['mileage'] = mileage;
        carList[car]['fuel'] = fuel;
    }
    let line = array.shift();
    while (line !== 'Stop') {
        if (line.includes('Drive')) {
            let [command, car, distance, fuel] = line.split(' : ');
            distance = Number(distance);
            fuel = Number(fuel);
            if (carList[car]['fuel'] < fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else {
                carList[car]['fuel'] -= fuel;
                carList[car]['mileage'] += distance;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (carList[car]['mileage'] >= 100000) {
                    delete carList[car];
                    console.log(`Time to sell the ${car}!`);
                }
            }
        } else if (line.includes('Refuel')) {
            let [command, car, fuel] = line.split(' : ');
            fuel = Number(fuel);
            if (carList[car]['fuel'] + fuel > 75) {
                let result = 75 - carList[car]['fuel'];
                carList[car]['fuel'] = 75;
                console.log(`${car} refueled with ${result} liters`)
            } else {
                carList[car]['fuel'] += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if (line.includes('Revert')) {
            let [command, car, kilometers] = line.split(' : ');
            kilometers = Number(kilometers);
            if (carList[car]['mileage'] - kilometers > 10000) {
                carList[car]['mileage'] -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`)
            } else {
                carList[car]['mileage'] = 10000;
            }
        }

        line = array.shift();
    }
    for (let car in carList) {
        console.log(`${car} -> Mileage: ${carList[car]['mileage']} kms, Fuel in the tank: ${carList[car]['fuel']} lt.`)
    }
}