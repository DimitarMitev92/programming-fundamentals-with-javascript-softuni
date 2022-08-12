function firstExe(array) {
    let string = array.shift();
    let line = array.shift();
    while (line !== 'Done') {
        if (line.includes('Change')) {
            let [command, char, replacement] = line.split(' ');
            if (string.includes(char)) {
                string = string.split(char).join(replacement);
            }
            console.log(string)
        } else if (line.includes('Includes')) {
            let [command, substring] = line.split(' ');
            if (string.includes(substring)) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (line.includes('End')) {
            let [command, substring] = line.split(' ');
            let lengthSubstr = substring.length;
            let stringLength = string.length;
            if (string.lastIndexOf(substring)) {
                let index = string.lastIndexOf(substring);
                if (index + lengthSubstr === stringLength) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
            } else {
                console.log('False');
            }
        } else if (line.includes('Uppercase')) {
            string = string.toUpperCase();
            console.log(string)
        } else if (line.includes('FindIndex')) {
            let [command, char] = line.split(' ');
            let index = string.indexOf(char);
            console.log(index);
        } else if (line.includes('Cut')) {
            let [command, startIndex, count] = line.split(' ');
            startIndex = Number(startIndex);
            count = Number(count);
            string = string.slice(startIndex, startIndex + count);
            console.log(string);
        }
        line = array.shift()
    }
}