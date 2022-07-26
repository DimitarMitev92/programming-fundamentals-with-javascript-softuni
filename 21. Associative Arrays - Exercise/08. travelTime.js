function travelTime(array) {
    let countriesObj = {};
    for (let line of array) {
        let [countryName, townName, travelCost] = line.split(' > ');
        travelCost = Number(travelCost);
        if (countriesObj.hasOwnProperty(countryName)) {
            if (countriesObj[countryName].hasOwnProperty(townName)) {
                if (travelCost < countriesObj[countryName][townName])
                    countriesObj[countryName][townName] = travelCost

            } else {
                countriesObj[countryName][townName] = travelCost
            }
        } else {
            countriesObj[countryName] = {
                [townName]: travelCost
            }
        }
    }
    let entriesObj = Object.entries(countriesObj);
    for (let line of entriesObj) {
        line[1] = Object.entries(line[1]);
    }
    let sortedArr = entriesObj.sort((a, b) => a[0].localeCompare(b[0])).flat();
    for (let i = 0; i < sortedArr.length; i += 2) {
        let result = ''
        result += `${sortedArr[i]} ->`
        sortedArr[i + 1] = sortedArr[i + 1].sort((a, b) => a[1] - b[1]);
        for (let [town, travelCost] of sortedArr[i + 1]) {
            result += ` ${town} -> ${travelCost}`
        }
        console.log(result)
    }
}