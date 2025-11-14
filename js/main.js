// Creo le variabili principali per comunicare con gli elementi del DOM
// El = Elemento del DOM
const distanceEl = document.getElementById("distance");
const ageEl = document.getElementById("age");
const btnSubmitEl = document.getElementById("btnSubmit");
const resultEl = document.getElementById("result");

// Creo la funzione di calcolo scontistica
btnSubmitEl.addEventListener("click", function (event) {

    // Impedisco che la pagina venga refreshata ogni volta in quanto non ho un server con cui comunicare
    event.preventDefault()

    const priceKm = 0.21;
    const distanceKm = parseInt(distanceEl.value);

    // Controllo che l'input dell'utente sia valido
    if (isNaN(distanceKm)) {
        return;
    }

    const standardPrice = (distanceEl.value * priceKm).toFixed(2);
    let discount = 0;
   
    // Applico scontistica
    if (ageEl.value == "junior") {
        discount = standardPrice * 0.20;
    } else if (ageEl.value == "senior") {
        discount = standardPrice * 0.40;
    }

    let discountedTicket = (standardPrice - discount).toFixed(2);
    
    // Stampo i dati calcolati in console
    console.log("Standard price", standardPrice);
    console.log("Discounted price", discountedTicket);

    // Recupero i dati e stampo in pagina
    document.getElementById("standard-price").textContent = `Tariffa standard: ${standardPrice} €`;
    document.getElementById("discount").textContent = `Sconto applicato: ${discount} €`;
    document.getElementById("discounted-ticket").textContent = `Prezzo finale del biglietto${discountedTicket} €`;

    distanceEl.value = "";
    ageEl.value = "";
})