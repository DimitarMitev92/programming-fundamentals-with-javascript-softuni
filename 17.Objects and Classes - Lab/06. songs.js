function solve(array) {
    let numberOfSongs = Number(array.shift());
    let searchingTypeList = array.pop();
    let arrAll = [];
    let typeListArr = [];

    for (let el of array) {
        el = el.split('_');
        let typeList = el[0];
        let name = el[1];
        if (searchingTypeList === 'all') {
            arrAll.push(name);
        } else if (typeList === searchingTypeList) {
            typeListArr.push(name)
        }
    }
    if (searchingTypeList === 'all') {
        console.log(arrAll.join('\n'));
    } else {
        console.log(typeListArr.join('\n'))
    }
}