/* Codice becchio biglietto del treno

// Input:
// Recupero: numero di chilometri ed età del passeggero
const age = parseInt(prompt("Inserisci l'età del viaggiatore"));
const distance = parseInt(prompt("Inserisci la distanza da percorrere in chilometri"));
const costoKM = 0.21;
console.log("Input age: ", age);
console.log("Input distance: ", distance);

// Elaborazione:
// Calcolo tariffa di base (distanza * costo chilometrico)
const costoBigliettoBase = distance * costoKM;
console.log("Costo del biglietto: ", costoBigliettoBase);

let costoBigliettoFinale = null;

// Verifico se l'utente è in una fascia d'età con scontistica
// Eventualmente applico lo sconto (cioè ricalcolo il totale)
if (age < 18) {

    costoBigliettoFinale = costoBigliettoBase * 0.80;
    console.log("Applicare scontistica Junior");

} else if (age > 65) {

    costoBigliettoFinale = costoBigliettoBase * 0.60;
    console.log("Applicare scontistica Senior");

} else {

    costoBigliettoFinale = costoBigliettoBase;
    console.log("Tariffa di base");
}

datoStampatile = costoBigliettoFinale.toFixed(2);

//Output:
// Stampo il costo finale del biglietto arrotondato sia in alert che in pagina HTML
document.getElementById("biglietto").innerHTML = `Il costo del biglietto è di ${datoStampatile} €`;
alert(`Il costo del biglietto è di ${costoBigliettoFinale.toFixed(2)} €`); */

// El = Elemento del DOM
// Creo le variabili principali per comunicare con gli elementi del DOM
const distanceEl = document.getElementById("distance");
const ageEl = document.getElementById("age");
const btnSubmitEl = document.getElementById("btnSubmit");
const resultEl = document.getElementById("result");

// Creo la funzione di calcolo scontistica
btnSubmitEl.addEventListener("click", function (event) {

    event.preventDefault()

    const priceKm = 0.21;
    const distanceKm = parseInt(distanceEl.value);

    if (isNaN(distanceKm)) {
        return;
    }

    const standardPrice = (distanceEl.value * priceKm).toFixed(2);
    let discount = 0;
   
    if (ageEl.value == "junior") {
        discount = standardPrice * 0.20;
    } else if (ageEl.value == "senior") {
        discount = standardPrice * 0.40;
    }

    let discountedTicket = (standardPrice - discount).toFixed(2);
    console.log("Standard price", standardPrice);
    console.log("Discounted price", discountedTicket);
})