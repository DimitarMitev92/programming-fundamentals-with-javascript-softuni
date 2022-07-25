function companyUsers(array) {
    let companies = {};
    for (let line of array) {
        let [companyName, id] = line.split(' -> ');
        if (companies.hasOwnProperty(companyName)) {
            if (!companies[companyName].includes(id)) {
                companies[companyName].push(id);
            }
        } else {
            companies[companyName] = [id]
        }
    }
    let entries = Object.entries(companies);
    let sortedArr = entries.sort((a, b) => a[0].localeCompare(b[0]));
    for (let company of sortedArr) {
        console.log(company[0]);
        for (let id of company[1]) {
            console.log(`-- ${id}`)
        }
    }
}