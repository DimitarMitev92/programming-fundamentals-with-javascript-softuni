function solve(num1, num2) {
    function facturial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i
        }
        return result;
    }

    let finalNum = facturial(num1) / facturial(num2);
    console.log(finalNum.toFixed(2))
}