/*
    Operador 
    Es un signo que especifica que debe efectuarse en una determinada operación

    Operadores aritmeticos (+,-,*,/,%,++,--)
    Operadores de asignación (=)
    Operadores lógicos (%%,||,!)
    Operadores de comparación (==,===,!=,<,>,>=,<=)
    Operadores de cadena (tolowerCase, toUpperCase, trin, toString, concat, +)
    
    Operadores aritmeticos

    Suma        (+): se utiliza para sumar dos números
    Resta       (-): es para restar dos números
    Multiplicar (*): para multiplicar dos números
    División    (/): para dividir un número de otro
    Residuo     (%): obtiene el residuo de una división
    Incremento  (++):aumenta de uno en uno la cantidad o el número
    Decremento  (--): disminuye de uno en uno la cantidad o el número
*/

let numero1 = 10;
let numero2 = 8;

    suma           = numero1 + numero2;
    resta          = numero1 - numero2;
    multiplicacion = numero1 * numero2;
    division       = numero1 / numero2;
    residuo        = numero1 % numero2;
    incremento     = numero1;
    incremento     ++;
    decremento     = numero2;
    decremento     --; 


    console.log(suma);
    console.log(resta);
    console.log(multiplicacion);
    console.log(division);
    console.log(incremento);
    console.log(decremento);

let precioReal          = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento   = (precioReal * porcentajeDescuento)/1000;
let precioConDescuento  = precioReal - cantidadDescuento;

console.log("precio real:$" + precioReal);
console.log("Porcentraje de descuento" + porcentajeDescuento + "%");
console.log("cantidad de descuento:$" + cantidadDescuento);
console.log("precio con descuento:$" + precioConDescuento);

/*
    Operadores de asignación
    
    (=): Este operador no compara, lo que hace es asignar
*/
let frutas = "fresas";

/*
    Operadores de comparacion
    (==): Igualdad compara si nuestros valores son iguales
*/
let numero3 = 10;
let texto   = "10";

console.log(numero3 == texto);

/*
    (===): 
    Desigualdad o distinto este operador verifica si dos valores no son iguales y de ser neceario la conversación
*/

let precioCaja   = 1499;
let precioMaximo = 1500;

if (precioCaja =! precioMaximo){
    
    console.log("El precio el producto no esigual al precio máximo");

} else {
    
    console.log("El precio del producto es igual al precio máximo permitido");
}

/*
    (!===) Desigualdad estricta, este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor
*/

let numero5 = 10;
let numero6 = "10";

if(numero5 !==Number(numero6)){

    console.log("son diferentes");

} else{

    console.log("los valores son iguales");
}

/*
    (!===)Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!===) en este caso ambos valores deben tener el mismo tipo y valor
*/

let numero7 = 41;
let numero8 = "50";

if(numero7 !== numero8){
    
    console.log("los valores son diferente");

}else{

    console.log("los valores son iguales");
}

// (>): Mayor que, básicamente nos indica si un valor es mayor que otro 

let puntuacionFinal = 85;
let puntuacionRequerida = 102;

    console.log(puntuacionFinal > puntuacionRequerida);

// (<): Menor que, nos indica si un valor es menor que otro

let edad = 40;
let edadLimite = 18;

    console.log(edad < edadNecesaria);
    
//(>=): Menor o igual que, nos indica si un valor es menor o igual a otro 

let temperatura = 14;
let temperaturaMaxima = 21;

    console.log(temperatura <= temperaturaMaxima);

/*
    Ejercicio 1 
    Un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
*/


/*
    Ejercicio 2 
    Un programa que pida al usuarios dos palabras y determine si son iguales o no
*/



/*
    Operadores lógicos
    (&&): AND se utiliza cuando las dos condiciones deben cumplirse
*/

let mayoriaDeEdad = 18;
let tieneIdentificacion = true;

if (mayoriaDeEdad >= 18 && tieneIdentificacion);{
    console.log("Puedes rentar el salón");
} else{
    console.log("No lo puedes rentar");
}

// (||) OR se utiliza cuando se debe cumplir una condificion u otra 

let esUsuario = false;
let descuento = true;

if (esPrime || descuento){
    console.log("califica para su descuento");
} else{
    console.log("No califica para descuento");
}

// (!) NOT se utiliza para negar el valor de una condificion

let esDiaLibre = false;

if (!esDiaLibre) {
    console.log("se trabaja");
} else{
    console.log("descanso");
}

//Operadores de cadena
//toLowerCase, hace el cambio de nuestro a string a minusculas

let mensajeUsuario = "Bienvenido a la tierra";
let cambioMinusculas = mensajeUsuario.toLocaleLowerCase();
    console.log(cambioMinusculas);

//toUpperCase hace el cambio de nuestro string a mayusculas 

let saludo = "casi viernes, casi navidad";
let cambioMayusculas = saludo.toUpperCase();
    
    console.log(cambioMayusculas);

//trim quita los espacios

let aviso = "   Ch35 rifa   "
let sinEspacios = aviso.trim();

console.log(aviso);

//toString convierte un tipo de dato number a string

let numero10 = 31;
let cadenas = numero10.toString();

    console.log(cadenas);

//concat

let nombre = "Alejandro";
let apellido = "López";
let nombreCompleto = nombre.concat (" ",apellido)

    console.log(nombreCompleto);
     
/*
    Empresión artmetica

    let operacion = 14+25*12; combina la suma con la multiplicacion

    Empresión de cadena;

    let notificacion = "casi," + "anio nuevo"; expresion concatenada

    Expresión lógica

    let esMayorDeEdad = (23>18)&&(23<65); tiene operaciones lógicos y de comparación

    Expresión de asignación 

    let frasco = chocolates; asigna el valor a la variable 
*/

//Ejercicio. Crear una receta de hotcakes

let tieneHarina = true;
let tieneHuevos = true;
let tieneMantequilla = true;
let tieneNutella = true;
let tieneLeche = true;


if (tieneHarina && tieneHuevos && tieneMantequilla && tieneNutella && tieneLeche) {
  alert("¡Puedes hacer Hotcakes!");
  // Puedes agregar más condiciones o lógica aquí según sea necesario
} else {
  alert("No puedes hacer Hotcakes. Necesitas todos los ingredientes.");
}


let siHay = false;
if (siHay == true) {
    alert("¡Genial! Tienes todos los ingredientes para hacer hotcakes.");
    alert("Comienza mezclando la harina, los huevos y la leche, luego añade la mantequilla derretida.");
    alert("Calienta un sartén y vierte un poco de la mezcla para hacer los hotcakes.");
    alert("Hotcakes listos, ¡a disfrutar!");
  } else {
        alert("Tssss, t faltan ingredientes para hacer hotcakes.");
        alert("No es posible hacer hotcakes sin todos los ingredientes.");
        alert("Ve a conseguirlos, CORREEEE");
  }