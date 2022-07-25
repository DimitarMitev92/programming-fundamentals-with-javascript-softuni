function minerTast(array) {
    let task = {};
    for (let i = 0; i < array.length; i += 2) {
        if (task.hasOwnProperty(array[i])) {
            task[array[i]] += Number(array[i + 1]);

        } else {
            task[array[i]] = Number(array[i + 1]);
        }
    }
    for (let key in task) {
        console.log(`${key} -> ${task[key]}`);
    }
}