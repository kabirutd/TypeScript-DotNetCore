//Named Funtion
//==============================================================

function Add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log('Add: ' + Add(10, 15));

//Anonymous function
//=============================================================

var Multiply = function (num3: number, num4: number): number {

    return num3 * num4;
}

console.log('Multiply using Anonymous: ' + Multiply)

//Lambda function
//=============================================================
let num1: number = 150
let num2: number = 15
let Divide = (num1: number, num2: number): string => { return num2 == 0 ? "Cannot divid by 0" : (num1 / num2).toString() }
console.log('Divid using lambda: ' + Divide)

//Function with Union Types
//===========================================================

let currentTime = (hour: number | string, minute: number | string) => { return hour + ':' + minute };


//function with optional paraeters
//===============================================================
function buildName(firstName: string, lastName?: string): string {
    return firstName + ' ' + lastName;
}

console.log(buildName("Mohammad"));
console.log(buildName("Mohammad", "Kabir"));

/*
Default Parameters
-------------------------------------------------------------------------------------------
If the user passes undefined or doesn't specify an argument, the default value will be assigned. These are called
default -initialized parameters.
For example, "Smith" is the default value for the lastName parameter.
*/
function buildName2(firstName: string, lastName = "Smith") {
    return firstName + ' ' + lastName;
}
buildName('foo', 'bar'); // firstName == 'foo', lastName == 'bar'
buildName('foo'); // firstName == 'foo', lastName == 'Smith'
buildName('foo', undefined); // firstName == 'foo', lastName == 'Smith'
