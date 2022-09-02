function solve(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let command = input.shift();
    let houseIndex = 0;

    while (command !== "Love!") {
        let currentCommand = command.split(' ');
        let length = Number(currentCommand[1])
        houseIndex += length;
        if (houseIndex > neighborhood.length - 1) {
            houseIndex = 0;
        }
        if (neighborhood[houseIndex] === 0) {
            console.log(`Place ${houseIndex} already had Valentine's day.`);
        } else {
            neighborhood[houseIndex] -= 2;
            if (neighborhood[houseIndex] === 0) {
                console.log(`Place ${houseIndex} has Valentine's day.`);
            }

        }


        command = input.shift()
    }

    let lastPosition = houseIndex;
    let counterFailed = 0;
    let counterSucc = 0;
    for (let j = 0; j < neighborhood.length; j++) {
        if (neighborhood[j] === 0) {
            counterSucc++;
        } else {
            counterFailed++;
        }
    }
    if (counterSucc === neighborhood.length) {
        console.log(`Cupid's last position was ${lastPosition}.`);
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid's last position was ${lastPosition}.`);
        console.log(`Cupid has failed ${counterFailed} places.`);
    }

}