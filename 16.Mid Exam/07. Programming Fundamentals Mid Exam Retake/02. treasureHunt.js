function solve(arr) {
    let treasureChest = arr.shift().split('|');

    let line = arr.shift();

    while (line !== 'Yohoho!') {
        let tokens = line.split(' ');
        let currentCommand = tokens.shift();
        if (currentCommand === 'Loot') {
            for (let i = 0; i < tokens.length; i++) {
                let currentTreasure = tokens[i];
                if (!treasureChest.includes(currentTreasure)) {
                    treasureChest.unshift(currentTreasure);
                }
            }
        } else if (currentCommand === 'Drop') {
            let index = Number(tokens[0]);
            if (index >= 0 && index < treasureChest.length) {
                let remove = treasureChest.splice(index, 1);
                treasureChest.push(remove);
            }
        } else if (currentCommand === 'Steal') {
            let number = Number(tokens[0]);
            if (number > treasureChest.length) {
                number = treasureChest.length;
            }
            let stealItems = treasureChest.slice(-number);
            for (let i = 0; i < number; i++) {
                treasureChest.pop();
            }
            console.log(stealItems.join(', '));
        }
        line = arr.shift()
    }

    let countEl = 0;
    let sumLengths = 0;
    for (let el of treasureChest) {
        countEl++;
        let currentLength = el.length;
        sumLengths += currentLength;
    }
    let average = sumLengths / countEl;

    if (sumLengths !== 0) {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`)
    } else {
        console.log(`Failed treasure hunt.`);
    }
}