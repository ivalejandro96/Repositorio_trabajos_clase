/*
    Funciones, son bloques de código con instrucciones que se pueden reutilizar las veces que sean necesarias.
    Algunas funciones reciben párametros y otras no reciben parámetros

*/

//Función que permita saludas
    function saludar() {
        console.log("hola desde una función");        
    }
//Ejecutar la función con su nombre y los parametros 
saludar();

//Function que es para retornar algo
//Hoisting. Caracteristica de una función qeu nos permite invocarla desde antes de su inicialicación, es decir, que puede invocarse antes del bloque del código o después

    function saludar() {
        console.log("hola invocando la función con hoisting");
}
    saludar();

//Funciones que retornan algo. Para que una función retorne algo (un string, una operación, una variable, ect.), necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return

function greeting(){
    return "hola desde una función que retorna";
}
    colsole.log(greeting());

//Función que retorna y recibe parametros
function sumar (x,y){
    return x + y;
}
let resultado = sumar (255,245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//Función para calcular el cuadrado de un número
function calcCuadrado (numero){
    return numero * numero;
}
let resultCuadrado = calcCuadrado(5);
colsole.log(resultCuadrado);

//--- Funciones flecha (Arrow function)---. Es una manera de declarar una función por declaración, sintetizando código y haciéndolo más legible.

//Función flecha para calcular el cubo de un número
const calcCubo = (number)=> {
    return number ** 3;
}
let resultCubo = calcCubo(3);
console.log(resultCubo);

