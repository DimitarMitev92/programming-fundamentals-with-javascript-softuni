function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxPasingersInWagon = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ');

        if (tokens[0] === 'Add') {
            let wagonToAdd = Number(tokens[1]);
            wagons.push(wagonToAdd);
        } else {
            let passangers = Number(tokens[0]);
            for (let j = 0; j < wagons.length; j++) {
                let currentWagon = Number(wagons[j]);
                if (currentWagon + passangers <= maxPasingersInWagon) {
                    let result = currentWagon + passangers;
                    let index = wagons.indexOf(currentWagon);
                    wagons.splice(index, 1, result);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));

}