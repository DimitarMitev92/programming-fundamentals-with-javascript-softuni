function solve(arr) {
    let statusPirateShip = arr.shift().split('>').map(Number);
    let statusWarship = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift());
    let isStalemateOccurs = true;
    let line = arr.shift();

    while (line !== 'Retire') {
        let tokens = line.split(' ');

        let command = tokens.shift();

        if (command === 'Fire') {
            let index = Number(tokens.shift());
            let damage = Number(tokens.shift());
            if (index >= 0 && index < statusWarship.length) {
                if (statusWarship[index] <= damage) {
                    console.log(`You won! The enemy ship has sunken.`);
                    isStalemateOccurs = false;
                    break;
                } else {
                    statusWarship[index] -= damage;
                }
            }
        } else if (command === 'Defend') {
            let startIndex = Number(tokens.shift());
            let endIndex = Number(tokens.shift());
            let damage = Number(tokens.shift());
            if (startIndex >= 0 && startIndex < statusPirateShip.length && endIndex >= 0 && endIndex < statusPirateShip.length) {
                for (let i = startIndex; i <= endIndex; i++) {
                    if (statusPirateShip[i] <= damage) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        isStalemateOccurs = false;
                        break;
                    } else {
                        statusPirateShip[i] -= damage;
                    }
                }
            }
        } else if (command === 'Repair') {
            let index = Number(tokens.shift());
            let health = Number(tokens.shift());
            if (index >= 0 && index < statusPirateShip.length) {
                if (statusPirateShip[index] + health > maxHealth) {
                    statusPirateShip[index] = maxHealth;
                } else {
                    statusPirateShip[index] += health;
                }
            }
        } else if (command === 'Status') {
            let counter = 0;
            for (let i = 0; i < statusPirateShip.length; i++) {
                let currentSection = Number(statusPirateShip[i]);
                if (currentSection < 0.2 * maxHealth) {
                    counter++
                }
            }
            console.log(`${counter} sections need repair.`);
        }
        line = arr.shift();
    }

    let sumPirateShip = 0;
    let sumWarship = 0;
    for (let section of statusPirateShip) {
        sumPirateShip += section;
    }
    for (let section of statusWarship) {
        sumWarship += section;
    }

    if (isStalemateOccurs) {
        console.log(`Pirate ship status: ${sumPirateShip}`);
        console.log(`Warship status: ${sumWarship}`);
    }
}