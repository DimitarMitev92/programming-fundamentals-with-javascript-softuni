function passwordGenerator(array) {
    let password = (array.shift() + array.shift()).split('');
    let replaceWord = array.shift().toUpperCase();
    let countVowels = 0;
    for (let char of password) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            countVowels++
        }
    }
    while (replaceWord.length <= countVowels) {
        replaceWord += replaceWord
    }
    replaceWord = replaceWord.slice(0, countVowels);
    let countReplaceWord = 0
    for (let i = 0; i < password.length; i++) {
        if (password[i] === 'a' || password[i] === 'e' || password[i] === 'i' || password[i] === 'o' || password[i] === 'u') {
            password.splice(i, 1, replaceWord[countReplaceWord]);
            countReplaceWord++
        }
    }
    console.log(`Your generated password is ${password.reverse().join('')}`);
}