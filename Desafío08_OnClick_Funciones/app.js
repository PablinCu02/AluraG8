let encabezado =document.querySelector('h1');
encabezado.innerHTML = 'Hora del Desafío';

function botonConsole(){
    alert('El botón fue clicado');
}

function botonPrompt(){
    let ciudad = prompt('Nombre una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de tí`);
}

function botonAlerta(){
    alert('Yo amo JS');
}

function botonSuma(){
    let num1=parseInt(prompt('Indica el primer numero'));
    let num2=parseInt(prompt('Indica otro numero'));

    return alert(`La suma de los dos numeros es ${num1+num2}`);
}