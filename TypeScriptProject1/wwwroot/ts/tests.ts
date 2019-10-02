var firstName: string = "Mohammad";
var surName: string = "Kabir";

function fullName(x: string, y: string, spaces: number): string {
    return x + Array(spaces + 1).join(' ') + y;
}
alert(fullName(firstName, surName, 3) + " Hello");