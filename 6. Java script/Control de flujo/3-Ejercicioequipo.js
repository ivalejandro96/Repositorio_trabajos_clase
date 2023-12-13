// Ejercicios para esta sesion

/* Ejercicio 1
  
  Elabora un programa que determine si una persona tiene edad suficiente para votar
 
  Debe recibir como parametro la edad
  
  Consideraciones: utilizar la estructura if-else
*/
    
  function votar(edad) {
    edad = parseInt(prompt("Ingrese su edad: "));
    if (edad >= 18) {
        return "Puede votar";
    } else {
        return "No puede votar";
    }
  }
  console.log(votar());

/* Ejercicio 2
  
  Desarrolla un programa que evalue si un numero es divisible
  entre 7 y 8
  
  Debe recibir como parametro un numero, cual sea
  
  Si se cumple, imprimir verdadero
  Si no, imprimir falso
 
  
  Consideracion - Utilizar la estructura if-else
  Casos de prueba: 56, 7, 8, 0, 224, 73

*/

  const divisible = (numero) => {
    numero = parseInt(prompt("Ingrese un numero: "));
    if (numero % 7 == 0 && numero % 8 == 0) {
        return "Verdadero";
    } else {
        return "Falso";
    }
  }
  console.log(divisible(divisible()));

/* Ejercicio 3
 
  Desarrolla un programa que evalue si un numero es divisible entre 4 o 9
  
  Debe recibir como parametro un numero aleatorio
  
  Si se cumple, imprimir verdadero
  Si no, imprimir falso
  
  Consideracion - Utilizar la estructura if-else
*/

  const divisible2 = (numero) => {
    numero = parseInt(prompt("Ingrese un numero: "));
    if (numero % 4 == 0 || numero % 9 == 0) {
        return "Verdadero";
    } else {
        return "Falso";
    }   
  }
  console.log(divisible2(divisible2()));

/* Ejercicio 4
  
  Realizar un programa que reciba como parametro una categoria de peliculas
  
  -accion
  -drama
  -comedia
  -romance
  -suspenso
  -terror
  
  Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula de acuerdo al parametro recibido
  
  Consideraciones: utilizar la estructura switch
*/

  switch (generoPelicula) {
    case "accion":
        recomendacionPelicula = "El transportador";
        break;
    case "drama":
        recomendacionPelicula = "yo antes de ti";
        break;
    case "comedia":
        recomendacionPelicula = "La familia Miller";
        break;
    case "romance":
        recomendacionPelicula = "la chica de rojo";
        break;
    case "suspenso":
        recomendacionPelicula = "la moja";
        break;
    case "terror":
        recomendacionPelicula = "anabelle";
        break;
    default:
        recomendacionPelicula = "unknown";
  }


/* Ejercicio 5
  
  Crear una interfaz de un cajero ATM
  
  Debe recibirse como parametro alguna de las siguientes opciones
  
  1. Retirar dinero
  2. Transferencia
  3. Deposito
  4. Pago de servicios
  
  Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
  Utilizar if/else
*/

  function cajeroATM(opcion) {
    opcion = parseInt(prompt("Ingrese una opcion: "));
    if (opcion == 1) {
        return "Retirar dinero";
    } else if (opcion == 2) {
        return "Transferencia";
    } else if (opcion == 3) {
        return "Deposito";
    } else if (opcion == 4) {
        return "Pago de servicios";
    } else {
        return "Opcion incorrecta";
    }
  }

console.log(cajeroATM());

/* Ejercicio 6
  
  Escribir en codigo un programa conversor de divisas
  
  Debe recibir como parametro una cantidad en pesos mexicanos y
  Segun sea la opcion que se indique, realizar la conversion correspondiente
  
  1. A dolares estadounidenses
  2. A euros 
  3. A yenes japoneses
  4. A libra esterlina
  5. A franco suizo
  
  Consideracion: estructura switch
  
 */

  function convertirDivisas(opcion) {
    let opcion = prompt("Ingrese una opción: ");
    switch (opcion) {
        case 1:
            return "A dolar estadounidense";
        case 2:
            return "A euros";
        case 3:
            return "A yen japones";
        case 4:
            return "A libre esterlina";
        case 5:
            return "A franco suizo";
        default:
            return "Opcion incorrecta";
    }
}

console.log(convertirDivisas(opcion));