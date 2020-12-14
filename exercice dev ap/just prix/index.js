let prix = nombreRandom();

const devinerBtn = document.querySelector("button#devinerBtn");
const restart = document.querySelector("button#restart");
const justePrix = document.querySelector('div#justePrix');
const plusPetit = document.querySelector('div#plusPetit');
const plusGrand = document.querySelector('div#plusGrand');
const resultatNombre = document.querySelector('p#resultatNombre');
let tentative = 0;

function deviner() {
    let nombreDeviner = document.querySelector('input#devinerNombre');
    return nombreDeviner.value;
}

devinerBtn.addEventListener('click', (e) => {
    if (deviner() == prix) {
        console.log("true");
        bon();
        tentative++;
        resultatNombre.innerHTML = tentative;
    } else {
        console.log("false");
        tentative++;
        mauvais();
    }
})

function bon() {
    justePrix.style.display = "block";
    plusGrand.style.display = "none";
    plusPetit.style.display = "none";
    devinerBtn.style.display = "none";
}

function mauvais() {
    justePrix.style.display = "none";
    if(deviner() > prix) {
        plusPetit.style.display = "block";
        plusGrand.style.display = "none";
    } else {
        plusGrand.style.display = "block";
        plusPetit.style.display = "none";
    }
}

restart.addEventListener('click', (e) => {
    nombreRandom();
    console.log('aa')
})

function nombreRandom() {
    let prix = Math.floor(Math.random() * Math.floor(10));
    return prix;
}
console.log(prix);
