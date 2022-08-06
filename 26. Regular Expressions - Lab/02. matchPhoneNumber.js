function regExPhones(input) {
    let validNames = [];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    while ((validName = pattern.exec(input)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(', '));
}