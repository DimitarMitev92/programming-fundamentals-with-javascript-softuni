function counterStrike(arr) {
    let initialEnergy = Number(arr.shift());
    let energy = arr.shift();
    let counter = 0;
    let isDontHaveEnergy = false;
    while (energy !== 'End of battle') {
        energy = Number(energy);
        if (initialEnergy - energy >= 0) {
            initialEnergy -= energy;
            counter++
        } else {
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${initialEnergy} energy`)
            isDontHaveEnergy = true;
            break;
        }
        if (counter % 3 === 0) {
            initialEnergy += counter;
        }
        energy = arr.shift();
    }
    if (!isDontHaveEnergy) {
        console.log(`Won battles: ${counter}. Energy left: ${initialEnergy}`)
    }
}