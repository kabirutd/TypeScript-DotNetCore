// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function getMaxChar(str) {
    var charMap = {};
    var max = 0;
    var maxChar = '';
    //let charArray: string[] = str.split('');
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        //console.log('char: ' + char);
        if (charMap[char]) {
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }
    }
    for (var char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return [maxChar, max];
}
//# sourceMappingURL=maxchar.js.map