/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

*/

// creare array di oggetti
const bikesList = [
    {
        name: "Willer 0 SLR",
        weight: 6.5,
    },
    {
        name: "Cannondale SuperSix",
        weight: 8.0,
    },
    {
        name: "Trek Emonda 2020",
        weight: 6.81,
    },
    {
        name: "Trek Emonda SLR",
        weight: 4.65,
    },
    {
        name: "SAVA Phantom 700C",
        weight: 8.1,
    },
];

console.table(bikesList);



// destructuring crei due variabili nominativi = a bikesList, parte da indice 0
let {name, weight} = bikesList[0];
console.log(name, weight);  /* perchè name deprecato???*/

let bikeLessWeight = {
    name,
    weight,
};


/* name = bikesList.name;
weight= bikesList.weight; */


// ciclo su ogni singolo elemento
/* let bikeLessWeight = bikesList[0]; */

for(let i = 1; i < bikesList.length; i++) {
    // variabile bikes contiene le key
    const bikes = bikesList[i];

    /* // con if, da variabile vuota e ciclo parte da 0
    if (!bikeLessWeight) {
        bikeLessWeight = bikes;
    } else if(bikeLessWeight.weight > bikes.weight) {
        bikeLessWeight = bikes;
    } */

    // 
    if (bikeLessWeight.weight > bikes.weight) {
        bikeLessWeight = bikes;
    }

        const bikeContainer = document.querySelector(".bike-container");

    bikeContainer.innerHTML = `<p>The <span class="fs-5 fst-italic fw-bold">${bikeLessWeight.name}</span> is the lightest bike on the market
                                    at the moment.</p>
                                <p>Its weight is only <span class="fs-5 fst-italic fw-bold">${bikeLessWeight.weight}</span> kilos</p>`
}

console.log(bikeLessWeight);


