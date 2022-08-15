function worldTour(array) {
    let stops = array.shift();
    let line = array.shift();
    while (line !== 'Travel') {
        if (line.includes('Add Stop')) {
            let [command, index, string] = line.split(':');
            index = Number(index);
            if (index >= 0 && index < stops.length) {
                let firstPart = stops.slice(0, index);
                let secondPart = stops.slice(index);
                stops = firstPart + string + secondPart;
            }
            console.log(stops)
        } else if (line.includes('Remove Stop')) {
            let [command, startIndex, endIndex] = line.split(':');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (startIndex >= 0 && startIndex < stops.length && startIndex <= endIndex && endIndex >= 0 && endIndex < stops.length) {
                let firstPart = stops.slice(0, startIndex);
                let secondPart = stops.slice(endIndex + 1);
                stops = firstPart + secondPart;
            }
            console.log(stops)
        } else if (line.includes('Switch')) {
            let [command, oldString, newString] = line.split(':');
            stops = stops.split(oldString).join(newString);
            console.log(stops);
        }
        line = array.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}