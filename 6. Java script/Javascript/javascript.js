//comentarios de una sola línea

/*comentarios 
multi línea*/ 

//alert("Hola mundo")

//console.log("Este es un mensaje para mi consola")

// var nombre = prompt("Ingresa tu nombre");
// alert("Hola, " + nombre + " bienvenidos a la ch35")

// var numero1 = parseInt(prompt("Ingresa el primer número:"));
// var numero2 = parseInt(prompt("Ingresa el segundo número:"))

// console.log("suma:" + (numero1 + numero2));
// console.log("resta:" + (numero1 - numero2));
// console.log("multiplicación:" + (numero1 * numero2));
// console.log("división:" + (numero1 / numero2));

/*
var nombre = prompt("Ingresa tu nombre");
var edad = parseInt(prompt("Ingresa tu edad"));

if(edad<17){

    alert(nombre + ",tas chavo, chavo");
}

else{
    alert(nombre + ", bienvenido doctor profesor patricio")
}
*/

    /* Este programa valida si una persona es baby boomer, generacion X, millenial o centenial*/

    // Declaracion de variables
    // var nombre, edad, generacion;

    // Función para determinar la generación
    // function determinarGeneracion(nombre, fecha_nacimiento) {
    // Validar que la edad sea un número positivo
    // if (isNaN(fecha_nacimiento) || edad < 0) {
    //   return "Por favor, introduce una edad válida.";
    // }
  
    // Determinar la generación
    // if (fecha_nacimiento >= 1946 && fecha_nacimiento <= 1964) {
    //   generacion = "Baby Boomer";
    // } else if (fecha_nacimiento >= 1965 && fecha_nacimiento <= 1980) {
    //   generacion = "Generación X";
    // } else if (fecha_nacimiento >= 1981 && fecha_nacimiento <= 1996) {
    //   generacion = "Millennial";
    // } else if (fecha_nacimiento >= 1997) {
    //   generacion = "Generación Z (Centennial)";
    // } else {
    //   generacion = "No se puede determinar la generación para esta edad.";
    // }
    // // Devolver el resultado
    // return Hola, ${nombre}, tu perteneces a la generación ${generacion}.;
    //  }
    // var nombre = prompt("Introduce tu nombre: "); 
    // var fecha_nacimiento = parseInt(prompt("Introduce tu fecha de nacimieno: "));
    // var resultado = determinarGeneracion(nombre, fecha_nacimiento);
    //   Imprime el resultado en la consola
    // console.log(resultado);

        //08/12/2023

    /* Tipos de datos y variables scope es el alcance de nuestras variables

        var, let, const la diferencia es el alcance var tiene un alcance global <let> tiene un alcnace local const se mantiene sin ningun cambio 
        
        <string> cadena de texto (lleva comillas)
        <number> numero
        <noolena> true/false
        <null> nulo
        <undefinied> no esta asigando o definido*/

    /*Todas nuestras varibles deben ser declaradas con nombres especificos y claros, sin espacios, no deben iniciar con números*/
    
    let nombre = "Arturo"
    let invitadosExtras = 4
    let esMayorEdad = true;
    let edad = 22;
    let invitadosExra = null;
    let horaDeSalida = undefined;

    //console.log(nombre); 

    /* Encasillamiento o tipado

    Nos ayuda para el mantenimiento del código ya que lo hace más legible y fácil de entender.
    Previene errores para reducir la probabilidad de los mismos 
    Mejora el rendimiento de nuestro programa
    

    let número = 15;
    let texto = "hola";

    con encasillamiento 

    let numeroEncasillado = Number = 5 ;
    let textoEcanasillado = String = "hola"; 

    typeof palabra reservada para saber que tipo de dato tenemos
    
    console.log(typeof(nombre));
    let funcionNumber = console.log (typeof Number (nombre));
    metodoPareInt = console.log(typeof(nombre));
    metodoParseFloat = console.log(typeof parseFloat (nombre));

    ParseInt y ParseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambas nos ayudan en este cambio

    conversión de number a string
    

    console.log(typeof String(edad));
    console.log(typeof edad.toString());
    
    conversión de boolean a numer  

    let numero = Number (esMayorEdad);
    console.log(typeof(numero));

    let texto = String(esMayorEdad)
    
    console.log(typeof(texto));
    console.log(typeof esMayorEdad.toString());

    let negación =!esMayorEdad;

    console.log (negación);
*/

    //concatenar basicamente es unir strings

    saludo = "Hola humano, "
    let frase = "7el futuro es hoy"

    texto= saludo + frase;
    document.write(texto);

/*  
    tipos de datos
    >-String (cadenas de texto)
    >-Number(numericos)
    >-Booleans(booleanos: true or false)
    >Null (nulos)
    >-Undefined(Indefinidios)
    >- Objects (objetos )
    >-Objects (Arrays)

    console.log();Nos permite visualizar en consola del navegador el código de JS
    console.warn();Muestra un mensaje de advertencia. 
    console.error()Muentra un mensaje de error.
    console.table(); 
*/
    let firstName;
    firstName = "Arturo"
    let lastName ="Gonzalez";

    console.log(firstname + " " + lastName);
    console.log("Mi primer nombre es " + firstName + "y mi apellido es " + lastName);

    /*ECMAscript 6 (ES6). Interpolación de cadenas
    > - backticks que son los asentos al revés 
    > - Para variables las invocamos${}
    > - Texto para string
*/
    console.log(`Mi nombre es ${firstName} y mi apellido es ${lastName} y tengo ${age} años`);    
    
    //console.warn();
    console.warn(`Precación, no es buena práctica dejar sin punto y coma`);
    //console.error();
    console.error(`Status 404: Failed`);

/* 
    Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS, en el cual se almacena una colección de elementos de manera ordenada.
    Los arrays se pueden manipular mediante métodos específicos.
    Los elementos de una array se contabilizan como índices empezando por índice 0, por lo cual, el primer elemento del array posee el índice 0.
*/

    let arreglo1 = []; //Array vacío
    console.log(`Array vacío ${arreglo1}`);
    //Los elementos de un array se separan mediante comas
    let cars = ["BMW", "Mazda","volvo", "Kia"]; //Array de string
    console.log(cars); 
    //longitud e índice son diferentes. La longitud (length) es el número de elementos y el índice corresponde a cada elemento a partir del 0.
    console.log(typeof(cars));
    let salariesMxn = []

    /*
    Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.
    Su sintaxis es la siguiente
    const object {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)}  
    Los objetos pueden almacenar diferentes tipos de valores.
*/
    const employee = {
        firstName:"Arturo",
        lastName: "Gonzalez",
        age:22,
        country:"México"
    }
    console.log(employee);

    //mostrando mi array como tabla 
    console.table(cars);
    //mostrando mi objeto como tabla
    console.table(employee);
    
 







