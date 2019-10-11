function capitalizeSentence(str: string): string {

    let wordArr: string[];

    wordArr = str.split(' ');
    var updatedWordArr: string[] = [''];

    for (let word of wordArr) {

        updatedWordArr.push(word[0].toUpperCase() + word.slice(1)) ; //+ word.splice
    }

    return  updatedWordArr.join(' ');
}