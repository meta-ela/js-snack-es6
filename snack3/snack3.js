/*
Snack 3
Dato l’array di nomi:
const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];
e dati due numeri min e max (min più piccolo di max).

Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
*/


const myArray = [
    "Michele",  /* 0 */
    "Fabio",    /* 1 */
    "Roberto",  /* 2 */
    "Giovanni", /* 3 */ 
    "Simone",   /* 4 */ 
    "Chiara"    /* 5 */
];

console.table(myArray);

let min = 1;
let max = 4;

let newArray = [];


// FOREACH ////////////////////////////////////////////

myArray.forEach((name, i) => {
    // se l'indice è compreso tra min e max allora pushare nell'array vuoto
    if (i >= min && i <= max) {
        newArray.push(name);
    }
});

console.log(newArray);




// FILTER ////////////////////////////////////////////

/* let arrayOnlySavedName = myArray.filter((name, i) => {
    // per essere pushato nell'array che crea in automatico filter
    // il return deve risultare true
    if (i >= min && i <= max) {
        return true
    }
}); */

// versione ridotta
let arrayOnlySavedName = myArray.filter((name, i) => i >= min && i <= max);

console.log(arrayOnlySavedName);
