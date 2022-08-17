function fancyBarcodes(array) {
    let pattern = /(@[#]{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@[#]{1,})/;
    let patternNum = /[0-9]+/g;
    let num = Number(array.shift());
    for (let i = 0; i < num; i++) {
        let match = array.shift().match(pattern);
        if (match) {
            let numMatch = match[0].match(patternNum);
            if (numMatch) {
                let result = numMatch.reduce((a, v) => a + v, '');
                console.log(`Product group: ${result}`)
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}