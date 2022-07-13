function employees(array) {
    let names = {};
    for (let name of array) {
        names.name = name;
        names.personalNumber = name.length;
        console.log(`Name: ${names.name} -- Personal Number: ${names.personalNumber}`);
    }
}