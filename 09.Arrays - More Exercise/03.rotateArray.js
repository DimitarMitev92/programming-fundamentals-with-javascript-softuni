function solve(arr) {
    const rotation = Number(arr.pop());

    for (let i = 0; i < rotation; i++) {
        let remove = arr.pop();
        arr.unshift(remove);
    }
    console.log(arr.join(' '));
}