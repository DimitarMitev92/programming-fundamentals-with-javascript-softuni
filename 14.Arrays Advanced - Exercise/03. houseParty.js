function houseParty(arr) {
    let guestList = [];

    for (let line of arr) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let command = tokens[2];

        if (command === 'going!') {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else if (command === 'not') {
            if (guestList.includes(name)) {
                let index = guestList.indexOf(name);
                guestList.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join('\n'));
}