function shootForTheWin(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let counterShot = 0;
    let currentIndex = arr.shift();
    while (currentIndex !== 'End') {
        currentIndex = Number(currentIndex);
        if (currentIndex >= 0 && currentIndex < targets.length) {
            if (targets[currentIndex] !== -1) {
                let currentValue = targets[currentIndex];
                for (let i = 0; i < targets.length; i++) {
                    if (currentValue < targets[i] && targets[i] !== -1 && currentIndex !== i) {
                        targets[i] -= currentValue;
                    } else if (currentValue >= targets[i] && targets[i] !== -1 && currentIndex !== i) {
                        targets[i] += currentValue;
                    }
                }
                targets[currentIndex] = -1;
                counterShot++;
            }
        }
        currentIndex = arr.shift();
    }
    console.log(`Shot targets: ${counterShot} -> ${targets.join(' ')}`)
}