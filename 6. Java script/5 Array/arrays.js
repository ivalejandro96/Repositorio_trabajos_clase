/* 
    Arrays
    Es una colección ó agrupación de elementos en una misma variable, cada uno de ellos ubicados por la posición que ocupa el array.
    Los arrays se utilizan para almacenar y organizar datos de manera más eficiente. 

*/

//Crear un array
const numeros = [1,2,3,4,5,6,7,8];
//Array de cadena de texto
const música = ["Pop", "Rock", "Indie", "Jazz", "Cumbias"];
console.log(música);

//Array mixto
const mixto = [
    "Hoja",
    8,
    true,
    {nombre:"Mar"}
];
console.log(mixto);

//Array vacío
const lista = [];
console.log(lista);
//Agregar elementos al array vacio
lista[0] = "Pop";
lista[1] = "Rock";
lista[2] = "Indie";
lista[3] = "Jazz";
lista[4] = "Cumbias";
console.log(lista)

//Otra manera de crear arrays
const frutas = new Array("Naranja","Manzana","kiwi","fresa","sandia");
//Estas sintaxis se pueden emplear en arrays porque son objetos, es una menra de mandar a llamar un nuevo objeto de tipo array.
console.log(frutas);

//Longitud de un array
console.log(frutas.length);

//Acceder a los elementos del array, acorde a su indice
console.log(frutas[3]); //fresas
console.log(frutas[5]); //underfined

//Modificar un elemento del array por el indice
const Abarrotes = ["Queso","yogurt", "mayonesa", "crema"];
console.log(Abarrotes)
//cambiemos un elemento de queso a quesillo
Abarrotes[1]="quesillo";
Abarrotes[2]="griego";
console.log(Abarrotes);

//Arreglos de arrglos o multidimencional
console.log("arreglo de arreglos");

//Estados:Estado de Mexico, Guadalajara, Yucatan, Sonora, Oaxaca, CDMX.

//platillos: sopes, caldo, panuchos, carne, mole y tacos

const estados = ["Estado de Mexico"," Guadalajara", "Yucatan", "Sonora", "Oaxaca", "CDMX"];
const platillos = ["sopes","caldo","panuchos","carne","mole","tacos"];

const menu = [estados, platillos];
console.log(en ${menu[0][1]} tambien se come ${menu[1][2]});

/* 
    En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array. 
*/

console.log(menu[0][0], menu[1][0]);

/* 
    Métodos de Arrays 
    Método de cola (queue). Los métodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO (First-in-first-out) Lo que signigica el primer elemento añadido es el primer elemento eliminado.  
    push
    shift 
    unshift

    Método de pila (stack).Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (Last-in-first-out) que significa el último elemento añadido es el primero en ser eleminidad.el último elemento (L) que se agrega(I) es el primero(F) en ser eliminado(O), ese es LIFO

    push 
    pop
*/

console.log("Metodos de Arrays");

const ch35 = ["Diana", "Lucero", "Marco", "Paulina", "Gonzalo"];
console.log(ch35);
//pop() Eliminar el ultimo elemento del array
let popch35 = ch35.pop();
console.log(popch35); //devuelve el dato eliminado
console.log(ch35) //elimina el dato de la lista

//push () Agregar al final del array
    let pushch35 = ch35.push("Gaby");
    console.log(ch35);

//shift () quitar primero del array 
    let shiftch35= ch35.shift();
    console.log(ch35);

// unshift agregar al principio del array 
let unshiftch35=ch35.unshift ("Dani");
console.log(ch35);

// reverse () cambia el sentido del ordenamiento del array
let reversech35=ch35.reverse();
console.log(ch35);
/* 
    Investigar:
    sort
    forEach
    slice
    splice
    indexOf

*/


