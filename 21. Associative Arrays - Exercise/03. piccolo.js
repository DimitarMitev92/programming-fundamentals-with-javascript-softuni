function piccolo(array) {
    let parking = {};
    for (let line of array) {
        let [command, num] = line.split(', ');
        if (command === 'IN') {
            parking[num] = 'IN';
        } else if (command === 'OUT') {
            if (parking.hasOwnProperty(num)) {
                delete parking[num];
            }
        }
    }
    let arrayKeys = Object.keys(parking).sort();
    if (arrayKeys.length > 0) {
        arrayKeys.forEach(el => console.log(el));
    } else {
        console.log(`Parking Lot is Empty`);
    }
}