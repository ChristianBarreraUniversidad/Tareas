//noprotect

var numeroRandom = Math.floor(Math.random() * 9) + 1;
console.log("El número generado es:", numeroRandom);

var opcion = prompt("Ingresa un número entre 3 y 6:");

opcion = parseInt(opcion);

if (!(opcion > 2 && opcion < 7)) {
    alert("Número Incorrecto. Debes elegir un número entre 3 y 6.");
} else {
    var respuesta = prompt("¿El número que elegiste es mayor o menor que el número de la computadora? (Escribe 'mayor' o 'menor')");

    if (respuesta === "mayor" && opcion > numeroRandom) {
        alert("¡Correcto! El número de la computadora era " + numeroRandom);
    } else if (respuesta === "menor" && opcion < numeroRandom) {
        alert("¡Correcto! El número de la computadora era " + numeroRandom);
    } else {
        alert("¡Incorrecto! El número de la computadora era " + numeroRandom);
    }
}