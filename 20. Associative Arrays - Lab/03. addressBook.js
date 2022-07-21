function addressBook(array) {
    let addressBookObj = {};

    for (let line of array) {
        let [name, address] = line.split(':');
        addressBookObj[name] = address;
    }
    let sortedArr = Object.entries(addressBookObj).sort((a, b) => a[0].localeCompare(b[0])).forEach(el => console.log(`${el[0]} -> ${el[1]}`));
}