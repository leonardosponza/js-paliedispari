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