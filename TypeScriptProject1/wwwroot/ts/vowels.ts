// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function countVowels(str: string): number {

    //let strArr: string[] = str.toLowerCase();
    const vowelChecker: string[] = ['a','e', 'i', 'o', 'u'];
    let vowelCount: number = 0;

    for (let char of str.toLowerCase()) {

        if (vowelChecker.includes(char)) {
            vowelCount++;

        }
    }

    return vowelCount;
}

function countVowelsRegEx(str: string): number {

    //let strArr: string[] = str.toLowerCase();
    const vowelChecker = 'aeiou';
    let vowelCount: number = 0;

    for (let char of str.toLowerCase()) {

        if (vowelChecker.includes(char)) {
            vowelCount++;

        }
    }

    return vowelCount;
}