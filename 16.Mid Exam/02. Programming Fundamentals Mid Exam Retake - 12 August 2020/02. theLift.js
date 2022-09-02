function theLift(input) {
    let people = Number(input.shift());
    let peopleleft = people;
    let rotationPeople = people;
    let cabins = input[0].split(' ').map((x) => Number(x));
    let lengthCabins = cabins.length;
    let sumCabinsPeople = 0;
    for (let cabinsSum of cabins) {
        sumCabinsPeople += cabinsSum
    }

    for (let i = 0; i < lengthCabins; i++) {
        if (cabins[i] < 4) {
            for (let j = 1; j <= rotationPeople; j++) {
                if (peopleleft > 0) {
                    if (cabins[i] < 4) {
                        cabins[i]++;
                        peopleleft--;
                    } else {
                        break;
                    }
                }

            }
        }
    }

    if (peopleleft === 0 && ((lengthCabins * 4 - sumCabinsPeople) === people)) {
        console.log(cabins.join(' '))
    } else {
        let allCabinsPlaces = lengthCabins * 4 - sumCabinsPeople;
        if (allCabinsPlaces > people) {
            console.log(`The lift has empty spots!`)
        } else {
            console.log(`There isn't enough space! ${people - allCabinsPlaces} people in a queue!`)
        }
        console.log(cabins.join(' '))
    }
}