function guineaPig(arr) {
    let food = Number(arr[0]) * 1000;
    let hay = Number(arr[1] * 1000);
    let cover = Number(arr[2] * 1000);
    let pigWeight = Number(arr[3] * 1000);
    let isNotEnough = false;
    for (let i = 1; i <= 30; i++) {
        if (food - 300 > 0) {
            food -= 300;
        } else {
            console.log(`Merry must go to the pet store!`);
            isNotEnough = true;
            break;
        }

        if (i % 2 === 0) {
            if (hay - 0.05 * food > 0) {
                hay -= 0.05 * food;
            } else {
                console.log(`Merry must go to the pet store!`);
                isNotEnough = true;
                break;
            }
        }

        if (i % 3 === 0) {
            if (cover - (1 / 3) * pigWeight > 0) {
                cover -= (1 / 3) * pigWeight;
            } else {
                console.log(`Merry must go to the pet store!`);
                isNotEnough = true;
                break;
            }
        }
    }
    if (!isNotEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`)
    }
}