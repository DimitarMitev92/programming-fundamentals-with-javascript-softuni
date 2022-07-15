function inventory(arr) {
    let heroes = [];

    for (let line of arr) {
        let hero = {};

        let tokens = line.split(' / ');

        let name = tokens.shift();
        hero.name = name;

        let level = Number(tokens.shift());
        hero.level = level;

        let items = tokens.join(', ');
        hero.items = items;

        heroes.push(hero);
    }
    let sortedByLevel = heroes.sort((a, b) => a.level - b.level);
    sortedByLevel.forEach(element => {
        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items}`);
    });
}