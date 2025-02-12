// OGGETTI

// Un oggetto è una struttura dati complessa che ci permette di racchiudere in un unica
// entità dei valori appartenenti alla stessa "risorsa"

const pet = {
  name: 'fufy',
  age: 4,
  furColor: 'white',
  skills: ['bark', 'cheering', 'drooling'], // array
}

console.log('PET', pet)
// DOT NOTATION
console.log(
  'Il colore del pelo di ' +
    pet.name +
    ' è ' +
    pet.furColor +
    ', e ha ' +
    (pet.age + 1) +
    ' anni'
)

console.log(pet.nonesiste) // undefined

console.log(pet.furColor) // "white"

// SQUARE BRACKETS NOTATION
console.log(pet['name'])

let myProperty = 'age'
console.log(pet.myProperty) // ??? -> undefined
console.log(pet[myProperty]) // ??? -> pet["age"] -> pet.age -> 4

// SOVRASCRIVERE PROPRIETÀ
pet.age = 5 // non è più 4

// AGGIUNGERE PROPRIETÀ
pet.nonesiste = false
console.log(pet.nonesiste) // false

// ELIMINARE PROPRIETÀ
delete pet.nonesiste
console.log(pet.nonesiste) // undefined

// ARRAY
// Strutture dati complesse, che però collezionano solo VALORI

const myNumbers = []
const myStrings = ['Stefano', 'Antonio', 'Chiara']

// ogni elemento in un array ha una POSIZIONE chiamata "indice"
// ogni array ha un numero totale di elementi in esso contenuti (lunghezza, length)

// gli array in JS sono zero-based (il primo elemento ha indice 0)
// il primo elemento avrà sempre indice (posizione) 0
// l'ultimo elemento avrà sempre indice (posizione) lunghezza-1

// per recuperare un elemento in un array utilizzando l'indice si utilizza la notazione:
myStrings[1] // -> 'Antonio'
myStrings[myStrings.length - 1]
// myStrings[99] --> undefined
myStrings.push('Gabriele') // aggiunge in fondo all'array un nuovo elemento
myStrings.unshift('Gabriele') // aggiunge in cima all'array un nuovo elemento
myStrings.pop() // rimuovo sempre l'ULTIMO elemento in un array
myStrings.shift() // rimuove sempre il PRIMO elemento in un array

// LOGICA CONDIZIONALE (if/else)

const totalCart = 20
const shippingCost = 10
// la spedizione è gratuita se il totalCart è > 50
let totalToPay // ???

if (totalCart > 50) {
  // un IF è uno SBARRAMENTO per questa porzione di codice
  // qui dentro NON verranno aggiunti i costi di spedizione
  totalToPay = totalCart
} else {
  // si entra nell'else quando la condizione dell'if È FALSE!
  // qui dentro VERRANNO aggiunti i costi di spedizione
  totalToPay = totalCart + shippingCost
}

// questo if è analogo all'else scritto sopra!
// if (totalCart <= 50) {
// }

const value = 20

if (value < 0) {
  console.log('valore negativo!')
} else if (value < 10) {
  console.log('valore è positivo ed è minore di 10!')
} else if (value < 20) {
  // valore uguale a 10 o maggiore! ma minore di 20
  console.log('valore è positivo ed è minore di 20!')
} else {
  //  valore uguale a 20 o maggiore
  console.log('valore è positivo è almeno 20!')
}

const myName = 'Stefano'

if (myName === 'Stefano') {
}

const favouriteNumber = 7

if (favouriteNumber) {
  // favouriteNumber è un cosiddetto valore "TRUTHY"
  console.log('Bel numero!')
}

const className = 'FS0125'

if (className) {
  console.log('Che bella classe')
}
