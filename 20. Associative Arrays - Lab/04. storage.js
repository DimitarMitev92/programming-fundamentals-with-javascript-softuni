function solve(arr) {
    let map = new Map();

    for (let line of arr) {
        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = +tokens[1];
        if (map.has(product)) {
            let oldQ = map.get(product);
            quantity += oldQ;
            map.set(product, quantity);
        } else {
            map.set(product, quantity)
        }
    }
    let iterable = map.keys();
    for (let key of iterable) {
        console.log(`${key} -> ${map.get(key)}`);
    }
}