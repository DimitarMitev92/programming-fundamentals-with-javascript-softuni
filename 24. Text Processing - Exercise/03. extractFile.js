function extractFile(string) {
    let fileArr = string.split('\\').pop().split('.');
    let fileExtension = fileArr.pop();
    let fileName = fileArr.join('.');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}