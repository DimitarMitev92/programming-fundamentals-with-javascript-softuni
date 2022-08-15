function destinationMapper(string) {
    let pattern = /(=|\/){1}(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let match = string.match(pattern);
    let travelArr = [];
    let travelPoints = 0;
    if (match === null) {
        console.log(`Destinations:`)
        console.log(`Travel Points: 0`);
    } else {
        for (let town of match) {
            town = town.split('').slice(1, town.length - 1).join('')
            travelArr.push(town);
            travelPoints += town.length;
        }
        console.log(`Destinations: ${travelArr.join(', ')}`);
        console.log(`Travel Points: ${travelPoints}`);
    }
}