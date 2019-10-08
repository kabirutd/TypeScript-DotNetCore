//Named Funtion
//==============================================================
function Add(num1, num2) {
    return num1 + num2;
}
console.log('Add: ' + Add(10, 15));
//Anonymous function
//=============================================================
var Multiply = function (num3, num4) {
    return num3 * num4;
};
console.log('Multiply using Anonymous: ' + Multiply);
//Lambda function
//=============================================================
var num1 = 150;
var num2 = 15;
var Divide = function (num1, num2) { return num2 == 0 ? "Cannot divid by 0" : (num1 / num2).toString(); };
console.log('Divid using lambda: ' + Divide);
//Function with Union Types
//===========================================================
var currentTime = function (hour, minute) { return hour + ':' + minute; };
//function with optional paraeters
//===============================================================
function buildName(firstName, lastName) {
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
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + ' ' + lastName;
}
buildName('foo', 'bar'); // firstName == 'foo', lastName == 'bar'
buildName('foo'); // firstName == 'foo', lastName == 'Smith'
buildName('foo', undefined); // firstName == 'foo', lastName == 'Smith'
//# sourceMappingURL=functions.js.map