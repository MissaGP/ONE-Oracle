let texto = document.querySelector('h1');
texto.innerHTML = 'Hora del Desafío';

function mostrarMensajeEnLaConsola() {
    console.log('El botón fue clicado!');
}

function mostrarAlerta() {
    let ciudad = prompt('Por favor, ingresa el nombre de una ciudad de Brasil:');
    alert (`Estuve en ${ciudad} y me acordé de ti.`);
}

function mostrarAlerta2() {
    alert('Amo JS');
}

function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer número'));
    let segundoNumero = parseInt(prompt('Digite el segundo número'));
    let resultado = primerNumero + segundoNumero;
    alert(`${primerNumero} + ${segundoNumero} = ${resultado}`)
}