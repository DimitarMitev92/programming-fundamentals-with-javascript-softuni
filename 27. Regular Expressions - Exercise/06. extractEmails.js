function extractEmails(input = '') {
    const pattern = /(^|(?<=\s))[a-z0-9]+[._-]?[a-z0-9]+@[a-z]+[-]?[a-z]+(\.[a-z]+)+/g;
    const match = input.match(pattern);

    if (match) {
        console.log(match.join('\n'));
    }
}