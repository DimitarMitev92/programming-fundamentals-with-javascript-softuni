function charectersInRange(firstChar, secondChar) {
    let start = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let finish = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

    let result = '';

    for (let i = start + 1; i < finish; i++) {
        result += `${String.fromCharCode(i)} `;
    }
    console.log(result);
}