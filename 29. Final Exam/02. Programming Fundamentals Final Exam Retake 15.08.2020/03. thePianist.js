function thePianist(array) {
    let num = Number(array.shift());
    let songs = {}
    for (let i = 0; i < num; i++) {
        let line = array.shift();
        let [piece, comsposer, key] = line.split('|');
        songs[piece] = {};
        songs[piece][comsposer] = key;
    }
    let line = array.shift();

    while (line !== 'Stop') {
        if (line.includes('Add')) {
            let [command, piece, composer, key] = line.split('|')
            if (songs.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                songs[piece] = {};
                songs[piece][composer] = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (line.includes('Remove')) {
            let [command, piece] = line.split('|');
            if (songs.hasOwnProperty(piece)) {
                delete songs[piece];
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (line.includes('ChangeKey')) {
            let [command, piece, newKey] = line.split('|');
            if (songs.hasOwnProperty(piece)) {
                for (let pieceLine in songs) {
                    if (pieceLine === piece) {
                        for (let composerLine in songs[pieceLine]) {
                            songs[pieceLine][composerLine] = newKey;
                            console.log(`Changed the key of ${piece} to ${newKey}!`);
                        }
                    }
                }
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        line = array.shift();
    }
    for (let piece in songs) {
        let entries = Object.entries(songs[piece]);
        for (let [composer, key] of entries) {
            console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
        }
    }
}