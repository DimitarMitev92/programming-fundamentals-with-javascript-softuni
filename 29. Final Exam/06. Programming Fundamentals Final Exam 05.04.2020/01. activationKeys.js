function activationKeys(array) {
    let activationKey = array.shift();
    let line = array.shift();
    while (line !== 'Generate') {
        if (line.includes('Contains')) {
            let [command, substring] = line.split('>>>');
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`)
            }
        } else if (line.includes('Flip')) {
            let [command, type, startIndex, endIndex] = line.split('>>>');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let firstPart = activationKey.slice(0, startIndex);
            let modifyPart = activationKey.slice(startIndex, endIndex);
            if (type === 'Upper') {
                modifyPart = modifyPart.toUpperCase();
            } else {
                modifyPart = modifyPart.toLowerCase();
            }
            let secondPart = activationKey.slice(endIndex);
            activationKey = firstPart + modifyPart + secondPart;
            console.log(activationKey);
        } else if (line.includes('Slice')) {
            let [command, startIndex, endIndex] = line.split('>>>');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let firstPart = activationKey.slice(0, startIndex);
            let secondPart = activationKey.slice(endIndex);
            activationKey = firstPart + secondPart;
            console.log(activationKey)
        }
        line = array.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}