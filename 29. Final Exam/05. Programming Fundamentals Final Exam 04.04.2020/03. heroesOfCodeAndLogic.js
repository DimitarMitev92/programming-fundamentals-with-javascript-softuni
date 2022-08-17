function heroes(array) {
    let numHeroes = Number(array.shift())
    let heroList = {};
    for (let i = 0; i < numHeroes; i++) {
        let [nameHero, hp, mp] = array.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);
        heroList[nameHero] = {}
        heroList[nameHero]['hp'] = hp;
        heroList[nameHero]['mp'] = mp;
    }
    let line = array.shift();
    while (line !== 'End') {
        if (line.includes('CastSpell')) {
            let [command, heroName, mpNeeded, spellName] = line.split(' - ');
            mpNeeded = Number(mpNeeded);
            if (heroList[heroName]['mp'] >= mpNeeded) {
                heroList[heroName]['mp'] -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroList[heroName]['mp']} MP!`)
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
            }
        } else if (line.includes('TakeDamage')) {
            let [command, heroName, damage, attacker] = line.split(' - ');
            damage = Number(damage);
            if (heroList[heroName]['hp'] - damage <= 0) {
                console.log(`${heroName} has been killed by ${attacker}!`)
                delete heroList[heroName];
            } else {
                heroList[heroName]['hp'] -= damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroList[heroName]['hp']} HP left!`)
            }
        } else if (line.includes('Recharge')) {
            let [command, heroName, amount] = line.split(' - ');
            amount = Number(amount);
            if (heroList[heroName]['mp'] + amount > 200) {
                let result = 200 - heroList[heroName]['mp'];
                heroList[heroName]['mp'] = 200;
                console.log(`${heroName} recharged for ${result} MP!`)
            } else {
                heroList[heroName]['mp'] += amount;
                console.log(`${heroName} recharged for ${amount} MP!`)
            }
        } else if (line.includes('Heal')) {
            let [command, heroName, amount] = line.split(' - ');
            amount = Number(amount);
            if (heroList[heroName]['hp'] + amount > 100) {
                let result = 100 - heroList[heroName]['hp'];
                heroList[heroName]['hp'] = 100;
                console.log(`${heroName} healed for ${result} HP!`)
            } else {
                heroList[heroName]['hp'] += amount;
                console.log(`${heroName} healed for ${amount} HP!`)
            }
        }
        line = array.shift();
    }
    for (let hero in heroList) {
        console.log(`${hero}`);
        console.log(`  HP: ${heroList[hero]['hp']}`);
        console.log(`  MP: ${heroList[hero]['mp']}`);
    }
}