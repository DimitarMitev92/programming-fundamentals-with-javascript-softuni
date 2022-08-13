function solve(input) {
    let text = input.shift();
    let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/gm
    let patternSplit = /[#|]/g
    let matches = text.match(pattern);
    let caloriesPerDay = 2000;
    let totalCalories = 0;
    let isValid = pattern.test(text);
    if (isValid === false) {
        console.log(`You have food to last you for: 0 days!`);
    } else {
        for (let line of matches) {
            let result = line.split(patternSplit);
            let product = result[1];
            let date = result[2];
            let calories = Number(result[3]);
            totalCalories += calories;
        }
        let day = Math.floor(totalCalories / caloriesPerDay);
        console.log(`You have food to last you for: ${day} days!`);


        for (let line of matches) {
            let result = line.split(patternSplit);
            let product = result[1];
            let date = result[2];
            let calories = result[3];
            console.log(`Item: ${product}, Best before: ${date}, Nutrition: ${calories}`)
        }
    }
}