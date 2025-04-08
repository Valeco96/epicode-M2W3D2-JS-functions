/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

let num1 = 2;
let num2 = 3;

let somma = crazySum(num1, num2);

function crazySum(x, y) {
  let risultato = x + y;

  if (x === y) {
    return risultato * 3;
  } else {
    return risultato;
  }
}
console.log(somma);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* crea la funzione e il parametro. if parametro > 20 || parametro < 100 = true else if parametro === 400 true else false */

function boundary(numero) {
  if (numero >= 20 && numero <= 100) {
    console.log(true);
  } else if (numero === 400) {
    console.log(true);
  } else {
    console.log(false);
  }
}

let numero = boundary(10);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(parola) {
  let invertita = parola.split("").reverse().join("");
  console.log(invertita);
  return invertita;
}

let reverse = reverseString("EPICODE");

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(string) {
  let upperString = string.toUpperCase("");
  console.log(upperString);
  return upperString;
}

let stringaMaiuscola = upperFirst("epicode");

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

let n = Math.floor(Math.random() * 10 + 1);
console.log(n);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let base = 7;
let altezza = 2;

let areaTotale = area(base, altezza);

function area(l1, l2) {
  let areaRettangolo = l1 * l2;
  //console.log(areaRettangolo);
  return areaRettangolo;
}
console.log(`Larea totale del rettangolo e' ${areaTotale} cm`);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

let elementoNumerico = crazyDiff(19);

function crazyDiff(cifra) {
  let differenza = cifra - 19;
  console.log(differenza);

  if (differenza > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
}

console.log(elementoNumerico);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

let frase = "Hello there";

function codify(frase) {
  return frase;
}
console.log(frase);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
