/*
Snack 4
Dato un elenco degli studenti di una facoltà, con il totale dei loro voti

1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. 
    Ci serve quindi un nuovo array di stringhe. 
    Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno 
    un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno 
    un totale di voti superiore a 70 e id superiore a 120
*/

let students = [
    { 
        name: "Marco",
        id: 213, 
        grades: 78,
    },
    { 
        name: "Paola",
        id: 110,
        grades: 96, 
    },
    { 
        name: "Andrea",
        id: 250,
        grades: 48, 
    },
    { 
        name: "Gaia", 
        id: 145, 
        grades: 74, 
    },
    { 
        name: "Luigi", 
        id: 196, 
        grades: 68, 
    },
    { 
        name: "Piero", 
        id: 102, 
        grades: 50, 
    },
    { 
        name: "Francesca", 
        id: 120, 
        grades: 84, 
    },
];

console.table(students);



// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. 
//    Ci serve quindi un nuovo array di stringhe. 
//    Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
const uppercaseStudents = students.map((person) => {
    return person.name.toUpperCase();
});

// versione ridotta
/* const uppercaseStudents = students.map((user) => user.name.toUpperCase()); */

console.log(uppercaseStudents);






// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno 
//     un totale di voti superiore a 70
const gradesStudent = students.filter((user) => {
    return user.grades >= 70;
}) ;

console.log("Seconda prova > 70", gradesStudent);

// con la destrutturazione alll'interno della funzione
// non molto utilizzato
const gradesStudent2 = students.filter((user) => {
    let {grades} = user;
    return grades >= 80;
}) ;

console.log("Seconda prova > 80", gradesStudent2);







// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno 
//     un totale di voti superiore a 70 e id superiore a 120
const superStudent = students.filter((student) => {
    if (student.grades >= 70 && student.id >= 120) {
        return true
    }

    // con return rapido
    /* return student.grades >= 70 && student.id >= 120 */
})

console.log(superStudent);