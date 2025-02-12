// spesso si ha bisogno di un ciclo che verrà eseguito un numero PREDETERMINATO
// di volte.
// Per queste esigenze esiste il ciclo FOR
// Un ciclo FOR, essendo eseguito un numero finito e predeterminato di volte,
// non rischia di essere infinito!

// for(
//  inizializzazione_del_contatore;
//  condizione_per_ripetere_l'esecuzione_del_ciclo;
//  incremento_automatico_del_contatore
// ){
// blocco di codice che verrà ripetuto ad ogni iterazione del ciclo
// }

// stampiamo un console.log() 10 volte
for (let i = 0; i < 10; i++) {
  console.log('CICLO FOR!')
} // ora la i si incrementerà di 1 in automatico

// console.log(i) // <-- undefined

for (let i = 0; i < 20; i++) {
  console.log('20 volte! LA i VALE', i)
}

// N.1 DEGLI UTILIZZI DEL CICLO FOR: ESPLORARE GLI ARRAY
const arrayOfNames = [
  'Barbara', // 0
  'Engi', // 1
  'Felice', // 2
  'Giulia', // 3
  'Ioan', // 4
  'Maddalena', // 5
  'Marcello', // 6
]

for (let i = 0; i < arrayOfNames.length; i++) {
  // la i è un NUMERO diverso ad ogni iterazione del ciclo
  // sarà 0, 1, 2, 3, 4, 5, 6
  // si ferma al 6 perchè ho detto al for che si deve fermare PRIMA di raggiunere
  // la lunghezza di arrayOfNames
  console.log('LA I è', i) // 0, 1, 2, 3, 4, 5, 6
  console.log(arrayOfNames[i]) // 'Barbara', 'Engi', 'Felice', etc.
}

arrayOfNames[0]
arrayOfNames[1]
arrayOfNames[2]
arrayOfNames[3]
arrayOfNames[4]
arrayOfNames[5]
arrayOfNames[6]

// immaginate di voler trovare nell'arrayOfNames TUTTI i nomi che cominciano
// con la lettera "M"

for (let i = 0; i < arrayOfNames.length; i++) {
  // charAt(0) è la PRIMA LETTERA di quella stringa
  if (arrayOfNames[i].charAt(0) === 'M') {
    console.log('QUESTO NOME COMINCIA CON LA M', arrayOfNames[i])
  }
}
