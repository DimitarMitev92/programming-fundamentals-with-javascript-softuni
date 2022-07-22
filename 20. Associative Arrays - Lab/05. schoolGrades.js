function solve(arr) {
    let assocArr = {}
    for (let line of arr) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        if (assocArr.hasOwnProperty(name)) {
            for (let num of tokens) {
                assocArr[name].push(num);
            }
        } else {
            assocArr[name] = tokens;
        }
    }
    let entries = Object.entries(assocArr);
    let sortedArr = entries.sort((a, b) => a[0].localeCompare(b[0]));
    for (let key of sortedArr) {
        let name = key[0];
        let length = key[1].length;
        let avrgNum = 0;
        for (let num of key[1]) {
            avrgNum += +num
        }
        avrgNum = (avrgNum / length).toFixed(2);
        console.log(`${name}: ${avrgNum}`);
    }
}