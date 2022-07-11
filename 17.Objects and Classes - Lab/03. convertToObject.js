function convertObj(jsonStr) {
    let obj = JSON.parse(jsonStr);
    let keys = Object.keys(obj);
    for (let key of keys) {
        console.log(`${key}: ${obj[key]}`);
    }
}