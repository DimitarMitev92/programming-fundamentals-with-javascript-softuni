function meetings(array) {
    let meetingsObj = {};

    for (let line of array) {
        let [day, name] = line.split(' ');
        if (meetingsObj.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let key in meetingsObj) {
        console.log(`${key} -> ${meetingsObj[key]}`)
    }
}