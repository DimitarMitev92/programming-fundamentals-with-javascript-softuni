function towns(array) {
    let townsInfo = {};
    for (let line of array) {
        let tokens = line.split(' | ');
        let town = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);
        townsInfo.town = town;
        townsInfo.latitude = latitude;
        townsInfo.longitude = longitude;
        console.log(townsInfo)
    }
}