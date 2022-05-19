const inputName = document.querySelector(".userName");
const inputKm = document.querySelector(".km");
const inputEta = document.querySelector(".eta");

const submitButton = document.getElementById("submitButton");
const undoneButton = document.getElementById("undoneButton");

const prezzoTicket = document.querySelector(".prezzoFinale");
const ticketType = document.querySelector(".ticketType");

const userNameElement = document.querySelector(".userNameTicket");
const nCarrozza = document.querySelector(".nCarrozza");
const nCodice = document.querySelector(".nCodice");

const prezzoKm = 0.21;
let discount = 0;


submitButton.addEventListener("click", function () {
    if (inputEta.value < 18) {
        discount = (20 / 100);
        ticketType.innerHTML = "Ridotto minorenni";
    } else if (inputEta.value > 65) {
        ticketType.innerHTML = "Ridotto over 65";
        discount = 40 / 100;
    } else {
        discount = 0;
        ticketType.innerHTML = "Biglietto standard";
    }

    const prezzoBiglietto = inputKm.value * prezzoKm;
    const prezzoCalcolato = prezzoBiglietto - prezzoBiglietto * discount;
    const prezzoFinale = prezzoCalcolato.toFixed(2);

    userNameElement.innerHTML = inputName.value;
    nCarrozza.innerHTML = parseInt(Math.random() * 10 + 1);
    nCodice.innerHTML = parseInt(Math.random() * 100000);
    prezzoTicket.innerHTML = prezzoFinale;
})

undoneButton.addEventListener("click", function () {
    inputName.value = "";
    inputEta.value = "";
    inputKm.value = "";
    userNameElement.innerHTML = "";
    prezzoTicket.innerHTML = "";
    nCarrozza.innerHTML = "";
    nCodice.innerHTML = "";
    ticketType.innerHTML = "";

})