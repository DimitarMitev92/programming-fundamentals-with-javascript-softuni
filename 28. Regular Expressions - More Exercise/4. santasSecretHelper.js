function santaHelper(array) {
    let num = Number(array.shift());
    let line = array.shift();
    let pattern = /[@](?<name>[A-Za-z]+)([^-@!:>]+[!])?(?<behaivior>[G])[!]/gm
    while (line !== 'end') {
        let lineSubstring = line.split('').map(el => el.charCodeAt() - num).map(el => String.fromCharCode(el)).join('');
        let match = lineSubstring.match(pattern)
        if (match !== null) {
            let name = pattern.exec(lineSubstring).groups.name;
            console.log(name)
        }
        line = array.shift();
    }
}