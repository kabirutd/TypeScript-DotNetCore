// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function getMaxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
    //let charArray: string[] = str.split('');
    for (let char of str) {
        //console.log('char: ' + char);
        if (charMap[char]) {
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return [maxChar, max];
}
//# sourceMappingURL=maxchar.js.map