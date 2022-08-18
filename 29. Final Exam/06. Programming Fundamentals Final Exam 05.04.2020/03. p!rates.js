function pirates(array) {
    let line = array.shift();
    let citiesObj = {}
    while (line !== 'Sail') {
        let [city, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);
        if (citiesObj.hasOwnProperty(city)) {
            citiesObj[city]['population'] += population;
            citiesObj[city]['gold'] += gold;
        } else {
            citiesObj[city] = {};
            citiesObj[city]['population'] = population;
            citiesObj[city]['gold'] = gold;
        }
        line = array.shift()
    }

    line = array.shift();
    while (line !== 'End') {
        if (line.includes('Plunder')) {
            let [command, town, people, gold] = line.split('=>');
            people = Number(people);
            gold = Number(gold);
            if (citiesObj.hasOwnProperty(town)) {
                citiesObj[town]['population'] -= people;
                citiesObj[town]['gold'] -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
                if (citiesObj[town]['population'] <= 0 || citiesObj[town]['gold'] <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    delete citiesObj[town];
                }
            }
        } else if (line.includes('Prosper')) {
            let [command, town, gold] = line.split('=>');
            gold = Number(gold);
            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                if (citiesObj.hasOwnProperty(town)) {
                    citiesObj[town]['gold'] += gold;
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${citiesObj[town]['gold']} gold.`)
                }
            }
        }
        line = array.shift()
    }
    let wealthySett = Object.entries(citiesObj).length;
    if (wealthySett === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    } else {
        console.log(`Ahoy, Captain! There are ${wealthySett} wealthy settlements to go to:`)
        for (let town in citiesObj) {
            console.log(`${town} -> Population: ${citiesObj[town]['population']} citizens, Gold: ${citiesObj[town]['gold']} kg`)
        }
    }
}