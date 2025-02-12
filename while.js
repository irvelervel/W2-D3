// I cicli sono delle strutture fondamentali nello sviluppo software (in generale).
// Rappresentano la possibilità di RIPETERE un numero indefinito/predefinito di volte
// un determinato blocco di istruzioni

// cominciamo con una keyword che instaura un ciclo che si ripeterà un numero
// non predeterminato di volte: il ciclo WHILE

// WHILE
// Il ciclo while prevede nella sua dichiarazione una CONDIZIONE
// FINCHÈ la condizione rimane vera, il ciclo una volta terminato RICOMINCERÀ!

let incrementalNumber = 0

while (incrementalNumber < 5) {
  // se la condizione è VERA, entriamo in questo blocco

  // qui inseriremo il codice che vorremo RIPETERE
  incrementalNumber += Math.random() // Math.random() genera un numero "CASUALE" tra 0 e 1
  console.log('SONO NEL CICLO WHILE')
  console.log('SIAMO ARRIVATI A', incrementalNumber)
}

console.log('finito')
