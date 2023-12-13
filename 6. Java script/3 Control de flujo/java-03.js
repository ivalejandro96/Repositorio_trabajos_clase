    console.log("hola CH35");
/*
    Control de flujo y estructuras de control
    Las estructuras de control son un componente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar código, podemos mencionar las siguientes:
        -Tomar decisiones basadas en condiciones especificas, esto produce un codigo tanto dinamico como adaptable
 
    - Repetir acciones (estructuras de bucle) para iterar peraciones o procesar datos de una forma eficiente sin caer en la edaccion de codigo innecesario y repetitivo
 
     - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser especificos en indicar qe instrucciones ejecutar y en que orden

    - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones en caso de que no se necesite
 
    - Facilitar tanto la escritura de codigo como la claridad de este
 
     Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 
       - Estructura if-else
       - Estructura switch
       - Estructuras de bucles (for, do, do while)
  
     Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista

    Declaración de sentencia if-else
    Palabra reservada if para comenzar la declaración, se coloca un parentesis () donde se debe colocar una expresión lógica (true/false), se abre y se cierra llaves {} para indicar que sentencia va a ejecutar si la condición se cumple (true), después de las llave declarada para el bloque de ejecución if, colocamos la palabra reservada else, para este ejemplo no es necesario colocar mas expresiones dentro de un parentesis simple colocamos otras llaves {} para indicar el bloque de código que tiene que ser ejecutado en caso de que la condición no se cumpla (false).

*/
    let n = 15;
    if (n>20){
        console.log(true);
    } else {
        console.log(false);
    }
    
/*    if-else-if
 
     Se trata de la misma sentencia if-else declarada anteriormente

     Lo que vamos a hacer diferente es, en este caso, anidar varias veces esta misma sentencia, lo que nos permitira tomar decisiones mas complejas
 
     Usaremos la contatenación.
    
     Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 
    Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar en codigo poco legible y confuso
*/
// If anidadas

    let edad=28;
    if(edad<18){
        console.log("No puedes votar");
    } else if(edad=>18 && edad<65){
        console.log("Eres un adulto");
    }else{
        console.log("Eres un adulto mayor")
    }

/*
    Sentencia switch
    La sentencia switch es para otro tipo de estructura de control de flujo, nuevamente se encuentra en diversos lenguajes de programación.
    Es bastante parecida al a la sentencia if-else, pero diferente en cuanto a comportamiento, ya que no se basa en una bifurcación (particion de caminos), sino que se secciona en multiples casos (case) que, dependiendo de la expresión que cumpla con un caso especifico, será consecuencia que se va a ejecutar, dentro de la declaración.

    Declaracióm:
    Se empieza a colocar la primera reservada switch, seguido de esto, colocamos parentesis () donde se debe colocar el valor que va a indicar que sentencia/caso a ejecutar.
    Falta indicar el bloque de código que se límita a esta sentencia, como lo haciamos en la sentencia if o con las funciones.
    Dentro de este bloque de código, falta colocar las cosas para casd valor que se desee, establecer según sea el valor indicado dentro de el parentesis ().
    Cada uno de estos casos se separa de la siguiente manera:
        -Case valor. Instrucción a ejecutar si el valor empata con este caso. 
    Después para indicar que la ejecución de las sentencias deben cortarse cuando se cumpla, se coloca la instrucción break.
    Cuando terminemos de establecer las cosas que nos permitan declarar, dentro de nuestra sentencia, debemos colocar un valor por defecto, default.
    Esta última sentencia nos permite establecer el valor por defecto, si es que este valor colocado no empata con ningún otro dentro de la sentencia o en ninguno de los casos.
    Default-mensaje no disponible
*/
let día = "martes";
switch(día){
    case "lunes":
        console.log("hola mundo");
        break;
    case "martes":
        console.log("segundo día de la semana");
        break;
    case "miercoles":
        console.log("tercer día de la semana")
        break;
    case "jueves":
        console.log("cuarto día");
        break;
    case "viernes":
        console.log("hay tematica")
        break;
    case "sábado":
        console.log("sexto día");
        break;
    case "domingo":
        console.log("último día");
        break;
        default:
        console.log("desconocido");
        break;
} //termina switch

/*
    Operador ternario
    Expresión condicional if-else más simple y legible
    Principalmente se usa para simplificar condiciones de una sola expresión.
    También puede anidar sentencia if-else-if, sin embargo, no es recomendado porque el código se puede tornar confuso y poco legible. 
    
    Su declaración es la siguiente:
    Palabra reservada var, let o const:
    Se le asigna un nombre como si tratara de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esta va dentro de una parentesis(), después hay que colocar un caracter ? que indica el camino a seguir, dependiendo que si se cumple (o no) la expresión. 
    Para separar el resultado true de false debemos agregar un caracter de :, del lado izquierdo se coloca la sentencia a ejecutar. 
    Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar. 
    
*/

//Ejemplo de operador ternario
let verificacion = n>5?"si es mayor":"No es mayor" 
console.log(verificacion);

/*
    Cuando usar if-else u cuando switch?
    if-else: cuando necesitamos tomar una decisión bajo condiciones más flexibles.
    switch: cuando tengamos un conjunto fijo de valores para comparar una expresión. 
*/
