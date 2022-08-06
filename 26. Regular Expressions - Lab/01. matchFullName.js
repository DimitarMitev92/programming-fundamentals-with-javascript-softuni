function solve(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames;
    let matches = []
    while ((validNames = pattern.exec(names)) !== null) {
        matches.push(validNames[0])

    }
    console.log(matches.join(' '))
}