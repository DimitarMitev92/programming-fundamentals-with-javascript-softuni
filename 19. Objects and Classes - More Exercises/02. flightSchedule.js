function flightSchedule(array) {
    let flightsArr = array.shift();
    let flightsCancelledArr = array.shift();
    let command = array.shift().join();
    let flightAllArr = [];

    for (let flight of flightsArr) {
        let flightsAllObj = {};
        let tokens = flight.split(' ');
        let specNum = tokens.shift();
        let destination = tokens.join(' ');
        flightsAllObj.Destination = destination;
        flightsAllObj.specNumber = specNum;
        flightsAllObj.Status = 'Ready to fly';
        flightAllArr.push(flightsAllObj);
    }

    for (let currentFlight of flightAllArr) {
        for (let flightCancelled of flightsCancelledArr) {
            let tokens = flightCancelled.split(' ');
            let specNumCancelled = tokens[0];
            let commandCancelled = tokens[1];
            if (currentFlight.specNumber === specNumCancelled) {
                currentFlight.Status = 'Cancelled';
            }
        }
    }
    if (command === 'Ready to fly') {
        for (let flight of flightAllArr) {
            if (flight.Status === command) {
                console.log(`{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`);
            }
        }
    } else if (command === 'Cancelled') {
        for (let flight of flightAllArr) {
            if (flight.Status === command) {
                console.log(`{ Destination: '${flight.Destination}', Status: '${flight.Status}' }`);
            }
        }
    }
}