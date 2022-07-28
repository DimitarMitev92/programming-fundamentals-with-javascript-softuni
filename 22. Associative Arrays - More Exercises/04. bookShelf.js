function bookShelf(array) {
    let shelvesObj = {};

    for (let line of array) {
        if (line.includes('->')) {
            let [shelfId, shelfGenre] = line.split(' -> ');
            let isNotTaken = true;
            for (let id in shelvesObj) {
                if (shelvesObj.hasOwnProperty(shelfId)) {
                    isNotTaken = false;
                }
            }
            if (isNotTaken) {
                shelvesObj[shelfId] = {
                }
                shelvesObj[shelfId]['numBooks'] = 0;
                shelvesObj[shelfId][shelfGenre] = {}
            }
        } else if (line.includes(': ')) {
            let [bookTitle, bookTokens] = line.split(': ')
            let [bookAuthor, bookGenre] = bookTokens.split(', ');
            for (let id in shelvesObj) {
                if (shelvesObj[id].hasOwnProperty(bookGenre)) {
                    shelvesObj[id][bookGenre][bookTitle] = bookAuthor
                    shelvesObj[id]['numBooks']++;

                }
            }

        }
    }
    let sortByCount = ((a, b) => b[1]['numBooks'] - a[1]['numBooks']);
    let sortByTitle = ((a, b) => a[0].localeCompare(b[0]));

    for (let [firstKey, firstValue] of Object.entries(shelvesObj).sort(sortByCount)) {
        for (let [secondKey, secondValue] of Object.entries(firstValue).sort(sortByTitle)) {
            if (secondKey !== 'numBooks') {
                console.log(`${firstKey} ${secondKey}: ${shelvesObj[firstKey]['numBooks']}`)
            }
            if (typeof secondValue !== 'number') {
                for (let [thirdKey, thirdValue] of Object.entries(secondValue)) {
                    console.log(`--> ${thirdKey}: ${thirdValue}`)
                }
            }
        }
    }
}