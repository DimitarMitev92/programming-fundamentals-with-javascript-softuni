function solve(input) {
    let numStr = input.charCodeAt();
    if (numStr >= 65 && numStr <= 90) {
        console.log(`upper-case`);
    } else if (numStr >= 97 && numStr <= 122) {
        console.log(`lower-case`);
    }
}