//De npumero a cadena
let cantidadHarina = 200;
let cantidadHarinaStr = String(cantidadHarina);
console.log("Cantidad de harina: " + cantidadHarinaStr + " gramos");

//De cadena a número
let cantidadAzucarStr = "50";
let cantidadAzucar = Number(cantidadAzucarStr);
console.log("Cantidad de azúcar: " + cantidadAzucar + " gramos");

//De booleano a cadena
let tieneHuevos = true;
let tieneHuevosStr = String(tieneHuevos);
console.log("¿Tiene huevos? " + tieneHuevosStr);

//De cadena a booleano
let tieneLecheStr = "true";
let tieneLeche = Boolean(tieneLecheStr);
console.log("¿Tiene leche? " + tieneLeche);

//De número a booleano
let temperaturaSarten = 180;
let temperaturaSartenBool = Boolean(temperaturaSarten);
console.log("¿La sartén está caliente? " + temperaturaSartenBool);

//De booleano a número
let requiereAceite = false;
let requiereAceiteNum = Number(requiereAceite);
console.log("¿Requiere aceite? " + requiereAceiteNum);

// Se declara un array llamado 'instrucciones' que contiene cadenas de texto con pasos para hacer hotcakes.
var instrucciones = [
    "1. En un tazón grande, mezcla la harina, el azúcar, el polvo de hornear y la sal.",
    "2. Agrega el huevo, la leche y la mantequilla.",
    "3. Mezcla bien hasta obtener una masa suave.",
    "4. Calienta un sartén a fuego medio.",
    "5. Vierte un poco de masa en la sartén caliente para formar cada hotcake.",
    "6. Cocina hasta que aparezcan burbujas en la superficie, luego voltea y cocina el otro lado hasta que esté dorado.",
    "7. Repite el proceso hasta que cocines todos los hotcakes.",
    "8. Sirve caliente con tu jarabe o frutas favoritas.",
];
// Se imprime un encabezado para indicar que se mostrarán las instrucciones.
console.log("\nInstrucciones:");

// Se utiliza un bucle 'for' para iterar a través de cada elemento del array 'instrucciones'.
for (var j = 0; j < instrucciones.length; j++) {
  // Se imprime cada elemento del array, que representa un paso en las instrucciones.
  console.log(instrucciones[j]);
}