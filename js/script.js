var parola = prompt('Inserisci una parola');

if(palindromo(parola)){
    document.getElementById('parola').innerHTML = 'è palindroma';
} else {
    document.getElementById('parola').innerHTML = 'non è palindroma';
}

function palindromo(parolaOK) {
   
    var parolaverifica = '';   
    for(var i = parolaOK.length - 1; i >= 0; i--){
        parolaverifica += parolaOK.charAt(i);
    }

    return parolaOK == parolaverifica;
}

// secondo

var scelta = prompt('pari/dispari');
console.log(scelta);
var numeromio = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numeromio);
var numeroPc = numerorandom(1, 5);
console.log(numeroPc);
var somma = sommanumeri(numeromio,numeroPc)


document.getElementById('pd-user').innerHTML += scelta;
document.getElementById('numero-user').innerHTML += numeromio;
document.getElementById('numero-pc').innerHTML += numeroPc;


if(pari(numeromio + numeroPc) && scelta == 'pari' || !pari(numeromio + numeroPc) && scelta == 'dispari'){
    document.getElementById('risultato').innerHTML = 'Hai vinto';
} else {
    document.getElementById('risultato').innerHTML = 'Hai perso';
}

function sommanumeri(num1,num2){
    return somma = num1 + num2;
}

function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pari(numero) {
    return numero % 2 == 0;
}