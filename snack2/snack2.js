/*
Snack2
Creare un array di oggetti di squadre di calcio. 
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui 
elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

// creare array di oggetti
let footballTeams = [
    {
        name: "Monte Peleè",
        points: 0,
        fouls: 0,
    },
    {
        name: "La Rivera",
        points: 0,
        fouls: 0,
    },
    {
        name: "Apache",
        points: 0,
        fouls: 0,
    },
    {
        name: "Athletic Club La Patagonia",
        points: 0,
        fouls: 0,
    },
    {
        name: "Club Amazonas",
        points: 0,
        fouls: 0,
    },
    {
        name: "Club El Incanto",
        points: 0,
        fouls: 0,
    },
    {
        name: "Los Alisios",
        points: 0,
        fouls: 0,
    },
    {
        name: "I Minotauri",
        points: 0,
        fouls: 0,
    },
    {
        name: "I Centurioni",
        points: 0,
        fouls: 0,
    },
    {
        name: "I Sovrani",
        points: 0,
        fouls: 0,
    },
];


// array vuoto dove inserire name e fouls da stampare
footballNewList = [];

// ciclo for con i numeri random
for (let i = 0; i < footballTeams.length; i++) {
    let points = Math.floor(Math.random() * 100);
    let fouls = Math.floor(Math.random() * 100);

    /* console.log("points", points);
    console.log("fouls", fouls); */

    // sovrascrivere le proprietà con una varaibile omonima
    /* footballTeams[i].points = points;
    footballTeams[i].fouls = fouls; */

    // con spread
    footballTeams[i] = {
        ...footballTeams[i],
        points,
        fouls,
    }

    // destructuring, pushare nel nuovo array lista di nomi dell'array originale + i fouls con numeri random
    footballNewList.push({
        name: footballTeams[i].name,
        fouls: footballTeams[i].fouls,
        });
}

console.table(footballTeams);

console.table(footballNewList);

