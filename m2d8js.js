const operazioniAmmesse = ["addizione", "sottrazione", "moltiplicazione", "divisione"]

let firstNumber = null;
let secondNumber = null;
let Operator = null;

const keys = document.querySelector(".calculator-keyboard")
console.log(keys);

keys.addEventListener('click', function(e) {
   
    if (e.target.matches("button")) { 
const display= document.querySelector("#display")
console.log ("OPERAZIONE:", e.target.id)
    }

})