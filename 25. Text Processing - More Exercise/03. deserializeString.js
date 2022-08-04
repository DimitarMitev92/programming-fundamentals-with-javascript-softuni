function deserializeString(array) {
    let line = array.shift();
    let result = []
    while (line !== 'end') {
        let [char, indexes] = line.split(':');
        indexes = indexes.split('/').map(Number);
        for (let index of indexes) {
            result[index] = char;
        }
        line = array.shift();
    }
    console.log(result.join(''))
}