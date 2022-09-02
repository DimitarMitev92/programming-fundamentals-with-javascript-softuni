function shoppingList(arr) {
    let initialList = arr.shift().split('!');
    let line = arr.shift();

    while (line !== 'Go Shopping!') {
        let [command, currentItem, newItem] = line.split(' ');

        if (command === 'Urgent') {
            urgent(currentItem);
        } else if (command === 'Unnecessary') {
            unnecessary(currentItem);
        } else if (command === 'Correct') {
            correct(currentItem, newItem);
        } else if (command === 'Rearrange') {
            rearrange(currentItem);
        }

        line = arr.shift();
    }

    function urgent(item) {
        if (!initialList.includes(item)) {
            initialList.unshift(item);
        }
        return initialList;
    }

    function unnecessary(item) {
        if (initialList.includes(item)) {
            let index = initialList.indexOf(item);
            initialList.splice(index, 1);
        }
        return initialList;
    }

    function correct(oldItem, newItem) {
        if (initialList.includes(oldItem)) {
            let index = initialList.indexOf(oldItem);
            initialList.splice(index, 1, newItem);
        }
        return initialList;
    }

    function rearrange(item) {
        if (initialList.includes(item)) {
            let index = initialList.indexOf(item);
            let remove = initialList.splice(index, 1);
            initialList.push(remove);
        }
        return initialList;
    }

    console.log(`${initialList.join(', ')}`);

}