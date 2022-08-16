function secretChar(array) {
    let message = array.shift();
    let line = array.shift();
    while (line !== 'Reveal') {
        if (line.includes('InsertSpace')) {
            let [command, index] = line.split(':|:');
            index = Number(index);
            let firstPart = message.slice(0, index);
            let secondPart = message.slice(index);
            message = firstPart + ' ' + secondPart;
            console.log(message)
        } else if (line.includes('Reverse')) {
            let [command, substring] = line.split(':|:');
            if (message.includes(substring)) {
                let index = message.indexOf(substring);
                let lengthSubstring = substring.length;
                let firstPart = message.slice(0, index);
                let removePart = message.slice(index, index + lengthSubstring).split('').reverse().join('');
                let secondPart = message.slice(index + lengthSubstring);
                message = firstPart + secondPart + removePart;
                console.log(message)
            } else {
                console.log(`error`)
            }
        } else if (line.includes('ChangeAll')) {
            let [command, substring, replacement] = line.split(':|:');
            if (message.includes(substring)) {
                message = message.split(substring).join(replacement);
                console.log(message);
            }
        }
        line = array.shift();
    }
    console.log(`You have a new text message: ${message}`)
}