function memoryGame(arr) {
    let sequenceNums = arr.shift().split(' ');
    let isFinishSeq = false;
    let line = arr.shift(' ');
    let counter = 0;
    while (line !== 'end') {
        let [firstIndex, secondIndex] = line.split(' ').map(Number);
        counter++
        if (firstIndex === secondIndex || (firstIndex < 0 || secondIndex < 0) || (firstIndex > sequenceNums.length - 1 || secondIndex > sequenceNums.length - 1)) {
            let pushEl = `-${counter}a`;
            sequenceNums.splice(sequenceNums.length / 2, 0, pushEl, pushEl);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (sequenceNums[firstIndex] === sequenceNums[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${sequenceNums[firstIndex]}!`)
            if (firstIndex > secondIndex) {
                sequenceNums.splice(firstIndex, 1);
                sequenceNums.splice(secondIndex, 1);
                if (sequenceNums.length <= 0) {
                    isFinishSeq = true;
                    break;
                }
            } else {
                sequenceNums.splice(secondIndex, 1);
                sequenceNums.splice(firstIndex, 1);
                if (sequenceNums.length <= 0) {
                    isFinishSeq = true;
                    break;
                }
            }
        } else if (sequenceNums[firstIndex] !== sequenceNums[secondIndex]) {
            console.log(`Try again!`);
        }

        line = arr.shift()
    }

    if (isFinishSeq) {
        console.log(`You have won in ${counter} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${sequenceNums.join(' ')}`);
    }
}