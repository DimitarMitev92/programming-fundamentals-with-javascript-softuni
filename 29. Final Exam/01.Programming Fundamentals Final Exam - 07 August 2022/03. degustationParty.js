function thirdExe(array) {
    let objGuest = {}
    let line = array.shift();
    let countUnlikeMeals = 0;
    while (line !== 'Stop') {
        if (line.includes('Like')) {
            let [command, guest, meal] = line.split('-');
            if (!objGuest.hasOwnProperty(guest)) {
                objGuest[guest] = [];
                objGuest[guest].push(meal)
            } else {
                if (!objGuest[guest].includes(meal)) {
                    objGuest[guest].push(meal);
                }
            }
        } else if (line.includes('Dislike')) {
            let [command, guest, meal] = line.split('-');
            if (!objGuest.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`)
            } else {
                if (objGuest[guest].includes(meal)) {
                    let index = objGuest[guest].indexOf(meal);
                    console.log(`${guest} doesn't like the ${meal}.`)
                    objGuest[guest].splice(index, 1);
                    countUnlikeMeals++;
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                }
            }
        }
        line = array.shift()
    }
    for (let guest in objGuest) {
        let result = objGuest[guest].join(', ');
        console.log(`${guest}: ${result}`);
    }
    console.log(`Unliked meals: ${countUnlikeMeals}`);
}