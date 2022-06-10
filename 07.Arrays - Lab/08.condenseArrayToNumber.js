function solve(arr) {

    if (arr.length === 1) {
        console.log(`${arr[0]}`);
    } else {
        while (arr.length > 1) {
            let newArr = [];
            for (let i = 0; i < arr.length - 1; i++) {
                let result = Number(arr[i]) + Number(arr[i + 1]);
                newArr.push(result);
            }
            arr = newArr;

        }
        console.log(`${arr[0]}`);
    }
}