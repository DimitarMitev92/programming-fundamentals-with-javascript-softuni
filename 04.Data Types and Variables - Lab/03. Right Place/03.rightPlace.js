function solve(firstString, char, secondString) {
    let result = firstString.replace('_', char);
    if (result === secondString) {
        console.log('Matched');
    } else {
        console.log(`Not Matched`);
    }
}