function gladiatorInventory(arr) {
    let equipments = arr.shift().split(' ');

    for (let line of arr) {
        let [command, equipment] = line.split(' ');

        if (command === 'Buy') {
            if (!equipments.includes(equipment)) {
                equipments.push(equipment);
            }
        } else if (command === 'Trash') {
            while (equipments.includes(equipment)) {
                let index = equipments.indexOf(equipment);
                equipments.splice(index, 1);
            }
        } else if (command === 'Repair') {
            if (equipments.includes(equipment)) {
                let index = equipments.indexOf(equipment);
                let remove = equipments.splice(index, 1);
                equipments.push(remove[0]);
            }
        } else if (command === 'Upgrade') {
            let [equip, upgrade] = equipment.split('-');
            if (equipments.includes(equip)) {
                let index = equipments.indexOf(equip);
                equipments.splice(index + 1, 0, `${equip}:${upgrade}`);
            }
        }
    }
    console.log(equipments.join(' '));
}