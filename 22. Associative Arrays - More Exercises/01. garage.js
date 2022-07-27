function garage(array) {
    let garages = {};
    for (let line of array) {
        let [garage, info] = line.split(' - ');
        info = info.split(': ').join(' - ');
        if (garages.hasOwnProperty(garage)) {
            garages[garage].push(info);
        } else {
            garages[garage] = [info];
        }
    }
    for (let numGarage in garages) {
        console.log(`Garage № ${numGarage}`);
        for (let info of garages[numGarage]) {
            console.log(`--- ${info}`);
        }
    }
}