/*
Programa para adivinar un número
*/


let numeroUsuario=0;
let intentos=0; //Llevará el conteo de intentos
let maxintentos=4;


//Damos la opción al usuario de elegir el rango 
console.log("¿Entre qué rango de numeros deseas hacer la adivinanza? ")
min = parseInt(prompt("Ingrese el número minimo"));
max = parseInt(prompt("Ingrese el número maximo"));
let numeroSecreto = parseInt(Math.random()* (max-min))+min; //Uso de la funcion random para acotar el rango
console.log("El número secreto es: " + numeroSecreto);


while(numeroUsuario != numeroSecreto){ //Diferente de
    numeroUsuario = parseInt(prompt(`Ingresa un numero entre ${min} y ${max}`));

    if(numeroUsuario == numeroSecreto){
                alert('El numero que ingresaste es igual que el secreto');
                alert(`El numero de intentos que te llevó fue de ${intentos} intentos`)
    }else
        if(numeroUsuario < numeroSecreto)
                alert('El numero secreto es mayor al que ingresaste')
       if(numeroUsuario > numeroSecreto)
                alert('El numero secreto es menor al que ingresaste');
        intentos++; //El contador de intentos se incrementa en 1

        if(intentos > maxintentos){//Ponemos un limite de intentos
                alert(`Lo siento, has agotado los ${maxintentos} intentos`)
                break;
        }
}

/*
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);
*/



