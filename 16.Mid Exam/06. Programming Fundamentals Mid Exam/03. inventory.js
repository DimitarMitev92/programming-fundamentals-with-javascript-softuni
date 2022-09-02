function inventory(arr) {
    let equipment = arr.shift().split(', ');
    let line = arr.shift();

    while (line !== 'Craft!') {

        let [command, firstItem] = line.split(' - ');

        if (command === 'Collect') {
            collect(firstItem);
        } else if (command === 'Drop') {
            drop(firstItem);
        } else if (command === 'Combine Items') {
            let [oldItem, newItem] = firstItem.split(':');
            combineItems(oldItem, newItem);
        } else if (command === 'Renew') {
            renew(firstItem);
        }
        line = arr.shift()
    }

    function collect(item) {
        if (!equipment.includes(item)) {
            equipment.push(item);
        }
        return equipment;
    }

    function drop(item) {
        if (equipment.includes(item)) {
            let index = equipment.indexOf(item);
            equipment.splice(index, 1);
        }
        return equipment;
    }

    function combineItems(oldItem, newItem) {
        if (equipment.includes(oldItem)) {
            let index = equipment.indexOf(oldItem);
            equipment.splice(index + 1, 0, newItem);
        }
        return equipment;
    }

    function renew(item) {
        if (equipment.includes(item)) {
            let index = equipment.indexOf(item);
            let remove = equipment.splice(index, 1);
            equipment.push(remove);
        }
        return equipment;
    }

    console.log(equipment.join(', '));
}