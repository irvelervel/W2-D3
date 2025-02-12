// COSTRUTTO SWITCH
// Ieri abbiamo imparato la logica condizionale.

const word = 'epicode'

// VERIFICHIAMO CHE WORD COMINCI CON UNA VOCALE
// E IN TAL CASO VOGLIAMO ANCHE SAPERE DI QUALE VOCALE SI TRATTI

const initialLetter = word.charAt(0) // 'e'

// e ora facciamo le condizioni:
if (initialLetter === 'a') {
  console.log('comincia con la lettera a')
} else if (initialLetter === 'e') {
  console.log('comincia con la lettera e')
} else if (initialLetter === 'i') {
  console.log('comincia con la lettera i')
} else if (initialLetter === 'o') {
  console.log('comincia con la lettera o')
} else if (initialLetter === 'u') {
  console.log('comincia con la lettera u')
} else {
  console.log('la parola NON comincia con una vocale!')
}

// c'è un modo migliore? sì! impariamo ad utilizzare il costrutto SWITCH
// il costrutto switch è sostanzialmente uno SUGAR COATING intorno ad un if/elseif

switch (initialLetter) {
  case 'a':
    console.log('comincia con la lettera a')
    break
  case 'e':
    console.log('comincia con la lettera e')
    break
  case 'i':
    console.log('comincia con la lettera i')
    break
  case 'o':
    console.log('comincia con la lettera o')
    break
  case 'u':
    console.log('comincia con la lettera u')
    break
  default:
    console.log('la parola NON comincia con una vocale!')
}
