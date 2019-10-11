function getReverseInt(num1) {
    let numArray = num1.toString().split('');
    let reversedString = '';
    for (let char of numArray) {
        reversedString = char + reversedString;
    }
    return parseInt(reversedString); // * Math.sign
}
//# sourceMappingURL=reverseint.js.map