var firstName: string = "Mohammad";
var surName: string = "Kabir";

function fullName(x: string, y: string, spaces: number): string {
    return x + Array(spaces + 1).join(' ') + y;
}

alert(fullName(firstName, surName, 3) + " Hello");

let fullName2: string = "Mohammad Kabir";
let age2: number = 35;

let nameAge2 = "My name is ${fullName2} and my age will be ${age2+1} next year.";
console.log(nameAge2);

//arrays and filter set of arrays
let arr1: number[] = [3, 1, 3, 5, 2, 4, 4, 4];

