function legendaryFarming(str) {
    let array = str.split(' ').map(x => x.toLowerCase());
    let materials = {
        shards: 0,
        fragments: 0,
        motes: 0,
    }
    let junks = {};
    for (let i = 0; i < array.length; i += 2) {
        let currentNum = Number(array[i]);
        let currentMaterial = array[i + 1];
        if (materials.hasOwnProperty(currentMaterial)) {
            materials[currentMaterial] += currentNum;
            if (materials[currentMaterial] >= 250) {
                if (materials['shards'] >= 250) {
                    console.log(`Shadowmourne obtained!`)
                    materials[currentMaterial] -= 250;
                    break;
                } else if (materials['fragments'] >= 250) {
                    console.log(`Valanyr obtained!`);
                    materials[currentMaterial] -= 250;
                    break;
                } else if (materials['motes'] >= 250) {
                    console.log(`Dragonwrath obtained!`);
                    materials[currentMaterial] -= 250;
                    break;
                }
            }
        } else {
            if (junks.hasOwnProperty(currentMaterial)) {
                junks[currentMaterial] += currentNum;
            } else {
                junks[currentMaterial] = currentNum;
            }
        }
    }
    let sortedMaterials = Object.entries(materials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    sortedMaterials.forEach(el => console.log(`${el[0]}: ${el[1]}`))
    let sortedJunks = Object.entries(junks).sort((a, b) => a[0].localeCompare(b[0]));
    sortedJunks.forEach(el => console.log(`${el[0]}: ${el[1]}`))
}