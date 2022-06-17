function solve(input) {
    let gameArr = input.shift().split(' ');
    let line = input.shift();

    while (line !== 'Play!') {
        let [command, game] = line.split(' ');

        if (command === 'Install') {
            if (!gameArr.includes(game)) {
                gameArr.push(game);
            }
        } else if (command === 'Uninstall') {
            if (gameArr.includes(game)) {
                let index = gameArr.indexOf(game);
                gameArr.splice(index, 1);
            }
        } else if (command === 'Update') {
            if (gameArr.includes(game)) {
                let index = gameArr.indexOf(game);
                let remove = gameArr.splice(index, 1);
                gameArr.push(remove[0]);
            }
        }
        else if (command === 'Expansion') {
            let [gameName, gameExp] = game.split('-');
            if (gameArr.includes(gameName)) {
                let index = gameArr.indexOf(gameName);
                let result = [gameName, gameExp].join(':')
                gameArr.splice(index + 1, 0, result)
            }
        }
        line = input.shift();
    }
    console.log(gameArr.join(' '));
}