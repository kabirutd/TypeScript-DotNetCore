function capitalizeSentence(str) {
    let wordArr;
    wordArr = str.split(' ');
    var updatedWordArr = [''];
    for (let word of wordArr) {
        updatedWordArr.push(word[0].toUpperCase() + word.slice(1)); //+ word.splice
    }
    return updatedWordArr.join(' ');
}
//# sourceMappingURL=capitalizesentence.js.map