function dictionary(array) {
    let arrayOfObj = array.map(el => JSON.parse(el));
    let result = {};
    for (let currentStr of arrayOfObj) {
        let tokens = Object.entries(currentStr);
        let currentKey = tokens[0][0];
        let currentValue = tokens[0][1];
        if (result.hasOwnProperty(currentKey)) {
            result[currentKey] = currentValue
        } else {
            result[currentKey] = currentValue;
        }
    }
    let sorted = Object.keys(result).sort().reduce((acc, key) => {
        acc[key] = result[key];
        return acc;
    }, {});
    for (let key in sorted) {
        console.log(`Term: ${key} => Definition: ${sorted[key]}`);
    }
}