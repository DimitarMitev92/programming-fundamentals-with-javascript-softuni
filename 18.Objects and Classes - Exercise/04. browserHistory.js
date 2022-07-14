function browserHistory(obj, array) {
    for (let line of array) {
        let command = line.split(' ')[0];
        if (command === 'Clear') {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        } else if (command === 'Open') {
            let site = line.split('Open ')[1];
            obj['Open Tabs'].push(site);
            obj['Browser Logs'].push(line);
        } else if (command === 'Close') {
            for (let openTab of obj['Open Tabs']) {
                let site = line.split('Close ')[1];

                if (openTab === site) {
                    let index = obj['Open Tabs'].indexOf(site);
                    let closeTab = obj['Open Tabs'].splice(index, 1);
                    obj['Recently Closed'].push(site)
                    obj['Browser Logs'].push(line);
                }
            }
        }
    }
    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`)
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
}