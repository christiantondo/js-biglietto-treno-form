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
alert(`Il costo del biglietto è di ${costoBigliettoFinale.toFixed(2)} €`);