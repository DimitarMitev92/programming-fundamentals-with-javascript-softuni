function passwordValidator(pass) {
    let passIsValid = true;

    if (!(pass.length >= 6 && pass.length <= 10)) {
        passIsValid = false;
        console.log(`Password must be between 6 and 10 characters`);
    }

    for (let char of pass) {
        if (!((char.charCodeAt() >= 48 && char.charCodeAt() <= 57) || (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) || (char.charCodeAt() >= 97 && char.charCodeAt() <= 122))) {
            passIsValid = false;
            console.log(`Password must consist only of letters and digits`);
            break;
        }
    }

    let counter = 0;

    for (let char of pass) {
        if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
            counter++
        }
    }
    if (counter < 2) {
        passIsValid = false;
        console.log(`Password must have at least 2 digits`);
    }

    if (passIsValid) {
        console.log(`Password is valid`);

    }

}