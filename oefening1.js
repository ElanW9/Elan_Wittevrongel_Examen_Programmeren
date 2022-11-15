import readlineSync from "readline-sync";

const Voornaam = readlineSync.question("Voornaam?");
const Familienaam = readlineSync.question("Achternaam?");
const Straathuisnummer = readlineSync.question("Straat en huisnummer?");
const Postcode = readlineSync.question("Postcode?");
const Gemeente = readlineSync.question("Gemeente?");


const firstName = Voornaam.charAt(0) + "."; 
const plaats = Gemeente.toUpperCase();





function logtest(){
    return `${firstName} ${Familienaam} \n${Straathuisnummer} \n${Postcode} \n${plaats}`
};

console.log(logtest());

