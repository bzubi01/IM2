// variablen und typen
const eyecolor = 'blau';
let haircolor = 'braun';
let weight = 75;
let height = 1.81;
let isStudent = true;
let is_righthanded = true;

//naming von variablen
const is_beni_righthanded = true; //snake case
const isBeniLefthanded = false; // camel case

// operatoren bedingungen
// < kleiner als
// > größer als
// <= kleiner gleich
// >= größer gleich
// == gleich
// === gleich und typgleich
// !== ungleich

//logische operatoren
// && und
// || oder

//bedingungen
let age = 23;
let isDrunk = false;
let vip = true;
if (age >= 18 && !isDrunk || vip) {
    console.log('Du darfst rein!');
} else {
    console.log('Du bist zu jung!');
}