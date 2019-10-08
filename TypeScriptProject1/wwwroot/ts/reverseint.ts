interface Math {
    sign(x: number): number;
}

function getReverseInt(num1: number): number {

    let numArray: string[] = num1.toString().split('')
    let reversedString: string = ''

    for (let char of numArray) {
        reversedString = char + reversedString
    }

    return parseInt(reversedString) // * Math.sign
} 