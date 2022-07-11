function city(obj) {
    let objKeys = Object.keys(obj);
    for (let key of objKeys) {
        console.log(`${key} -> ${obj[key]}`);
    }
}