function asciiSumator(array) {
    let firstSymbolAscii = Math.min(array[0].charCodeAt(), array[1].charCodeAt());
    let secondSymbolAscii = Math.max(array[0].charCodeAt(), array[1].charCodeAt());
    let sum = 0;
    for (let char of array[2]) {
        let charASciiCode = char.charCodeAt();
        if (charASciiCode > firstSymbolAscii && charASciiCode < secondSymbolAscii) {
            sum += charASciiCode;
        }
    }
    console.log(sum)
}