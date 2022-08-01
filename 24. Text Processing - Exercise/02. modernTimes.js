function modernTimes(sentence) {
    let hashTagArr = sentence.split(' ').filter(x => x.length > 1 && x[0] === '#').map(x => x.split('').slice(1, x.length).join(''));
    for (let word of hashTagArr) {
        for (let char of word) {
            if (!(char.charCodeAt() >= 65 && char.charCodeAt() <= 90 || char.charCodeAt() >= 97 && char.charCodeAt() <= 122)) {
                let index = hashTagArr.indexOf(word);
                hashTagArr.splice(index, 1);
                break;
            }

        }
    }
    hashTagArr.forEach(element => {
        console.log(element)
    });
}