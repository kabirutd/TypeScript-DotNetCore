function getReverseInt(num1) {
    var numArray = num1.toString().split('');
    var reversedString = '';
    for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
        var char = numArray_1[_i];
        reversedString = char + reversedString;
    }
    return parseInt(reversedString); // * Math.sign
}
//# sourceMappingURL=reverseint.js.map