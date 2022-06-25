function pointsValidation(arr) {
    const x1 = arr.shift();
    const y1 = arr.shift();
    const x2 = arr.shift();
    const y2 = arr.shift();

    function comparison(x1, y1, x2, y2) {
        const comparisonNum = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        if (comparisonNum % 1 === 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    comparison(x1, y1, 0, 0);
    comparison(x2, y2, 0, 0);
    comparison(x1, y1, x2, y2);
}