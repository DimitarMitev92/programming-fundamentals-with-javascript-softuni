function plantDiscovery(array) {
    let num = Number(array.shift());
    let plantsObj = {};
    for (let i = 0; i < num; i++) {
        let [plant, rarity] = array.shift().split('<->');
        rarity = Number(rarity);
        plantsObj[plant] = {};
        plantsObj[plant]['rarity'] = rarity;
        plantsObj[plant]['rating'] = [];
        plantsObj[plant]['counter'] = 0;
    }

    let line = array.shift();

    while (line !== 'Exhibition') {
        if (line.includes('Rate')) {
            let [command, plantInfo] = line.split(': ');
            let [plant, rating] = plantInfo.split(' - ');
            rating = Number(rating);
            if (plantsObj.hasOwnProperty(plant)) {
                plantsObj[plant]['rating'].push(rating);
                plantsObj[plant]['counter']++;
            } else {
                console.log(`error`);
            }
        } else if (line.includes('Update')) {
            let [command, plantInfo] = line.split(': ');
            let [plant, newRarity] = plantInfo.split(' - ');
            newRarity = Number(newRarity);
            if (plantsObj.hasOwnProperty(plant)) {
                plantsObj[plant]['rarity'] = newRarity;
            } else {
                console.log(`error`);
            }
        } else if (line.includes('Reset')) {
            let [command, plant] = line.split(': ');
            if (plantsObj.hasOwnProperty(plant)) {
                plantsObj[plant]['rating'] = [];
                plantsObj[plant]['counter'] = 0;
            } else {
                console.log(`error`);
            }
        }
        line = array.shift();
    }
    console.log(`Plants for the exhibition:`);
    for (let key in plantsObj) {
        let average = 0;
        if (plantsObj[key]['rating'].length !== 0) {
            let sum = plantsObj[key]['rating'].reduce((acc, num) => acc + num);
            average = sum / plantsObj[key]['counter'];
        }
        console.log(`- ${key}; Rarity: ${plantsObj[key]['rarity']}; Rating: ${average.toFixed(2)}`)
    }
}