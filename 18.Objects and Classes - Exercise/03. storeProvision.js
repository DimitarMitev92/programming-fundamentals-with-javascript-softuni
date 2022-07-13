function storeProvision(currentStock, deliveryStock) {
    let localStore = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        let currentProduct = currentStock[i];
        let currentQuantity = Number(currentStock[i + 1]);
        localStore[currentProduct] = currentQuantity;
    }
    for (let j = 0; j < deliveryStock.length - 1; j += 2) {
        let deliveryProduct = deliveryStock[j];
        let deliveryQuantity = Number(deliveryStock[j + 1]);
        if (localStore.hasOwnProperty(deliveryProduct)) {
            localStore[deliveryProduct] += deliveryQuantity
        } else {
            localStore[deliveryProduct] = deliveryQuantity;
        }
    }
    for (let product in localStore) {
        console.log(`${product} -> ${localStore[product]}`)
    }
}