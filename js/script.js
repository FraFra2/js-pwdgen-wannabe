//HTML Elements
const label = document.getElementById("passwordLabel");
//User Input
const userName = prompt("Inserire il proprio nome:");
const userSecondName = prompt("Inserire il proprio cognome:");
const favCol = prompt("Inserire il proprio colore preferito:");

let pass = userName + userSecondName + favCol + "101";

let output = `La tua (insicurissima) password: ${pass}`;

label.innerHTML = output;


