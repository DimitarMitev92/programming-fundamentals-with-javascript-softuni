function secondExe(array) {
    let num = Number(array.shift());
    let patter = /^([\$|\%]{1})(?<tag>[A-Z][a-z]{2,})\1: \[(?<num1>[\d]+)\]\|\[(?<num2>[\d]+)\]\|\[(?<num3>[\d]+)\]\|$/;
    for (let i = 0; i < num; i++) {
        let line = array.shift();
        if (line.match(patter)) {
            let exec = patter.exec(line);
            let tag = exec.groups.tag;
            let resultStr = '';
            let num1 = Number(exec.groups.num1);
            let char1 = String.fromCharCode(num1);
            let num2 = Number(exec.groups.num2);
            let char2 = String.fromCharCode(num2);
            let num3 = Number(exec.groups.num3);
            let char3 = String.fromCharCode(num3);
            resultStr += char1 + char2 + char3;
            console.log(`${tag}: ${resultStr}`)
        } else {
            console.log('Valid message not found!');
        }
    }
}