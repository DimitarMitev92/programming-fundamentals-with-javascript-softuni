function phoneBook(arr) {
    let phoneBookObj = {}
    for (let line of arr) {
        let [name, phoneNum] = line.split(' ');
        phoneBookObj[name] = phoneNum;
    }
    for (let el in phoneBookObj) {
        console.log(`${el} -> ${phoneBookObj[el]}`)
    }
}