function passwordReset(array) {
    let password = array.shift()
    let line = array.shift();
    while (line !== 'Done') {
        if (line.includes('TakeOdd')) {
            let result = [];
            for (let i = 0; i < password.length; i++) {
                if (i % 2 !== 0) {
                    result.push(password[i])
                }
            }
            password = result.join('');
            console.log(password)
        } else if (line.includes('Cut')) {
            let [command, index, length] = line.split(' ');
            index = Number(index);
            length = Number(length);
            let firstPart = password.slice(0, index);
            let secondPart = password.slice(index + length);
            password = firstPart + secondPart;
            console.log(password)
        } else if (line.includes('Substitute')) {
            let [command, substring, substitute] = line.split(' ');
            if (password.includes(substring)) {
                password = password.split(substring).join(substitute);
                console.log(password)
            } else {
                console.log(`Nothing to replace!`);
            }
        }
        line = array.shift()
    }
    console.log(`Your password is: ${password}`);
}