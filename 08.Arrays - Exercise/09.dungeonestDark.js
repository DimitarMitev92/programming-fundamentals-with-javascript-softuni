function solve(arr) {

    let initialHealth = 100;
    let initialCoins = 0;

    let roomsArr = arr[0].split('|');
    let counter = 0;
    let isDead = false;

    for (let currentRoom of roomsArr) {
        counter++;
        let tokens = currentRoom.split(' ');
        let command = tokens[0];
        let number = Number(tokens[1]);

        if (command === 'potion') {
            if (initialHealth + number > 100) {
                console.log(`You healed for ${100 - initialHealth} hp.`);
                console.log(`Current health: ${100} hp.`)
                initialHealth = 100;
            } else {
                initialHealth + number;
                console.log(`You healed for ${number} hp.`);
                initialHealth += number;
                console.log(`Current health: ${initialHealth} hp.`);
            }
        } else if (command === 'chest') {
            initialCoins += number;
            console.log(`You found ${number} coins.`);
        } else {
            if (initialHealth - number > 0) {
                initialHealth -= number;
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                isDead = true;
                break;
            }
        }
    }
    if (!isDead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    } else {
        console.log(`Best room: ${counter}`);

    }
}