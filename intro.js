

console.log("\n*****************Variables***********************\n");
var numero1 = 4;
var numero2 = 2;
console.log("Número 1: " + numero1 + " Número 2: " + numero2);

console.log("\n*****************Cadenas***********************\n");
var frase1;
frase1 = "Ejemplo comillas dobles";
var frase2;
frase2 = 'Ejemplo comillas simples';
var frase3;
frase3 = `Ejemplo comillas ${frase1} invertidas`; //En este caso se pueden meter datos con ${ *** }

console.log(frase1 + "\n" + frase2 + "\n"+ frase2);

console.log("\n*****************Condicionales***********************\n");

console.log(true);
console.log(false);

console.log(numero1 < numero2);
console.log(numero1 > numero2);
console.log(numero1 = numero2); //valor, sustituye un valor por otro
console.log(numero1 == numero2);//valor, contexto, revisa que sí haya equivalencia
console.log(numero1 === numero2); //valor, contexto y tipo de variable
console.log(numero1 != numero2); //Diferente

console.log("\n*****************Operador lógico AND***********************\n");
console.log(true&&false); //Al usar &&, las dos deben ser true para que el resultado sea true, en el ejemplo saldrá False
console.log(true&&true); //En el ejemplo saldrá true

console.log("\n*****************Operador lógico OR***********************\n");
console.log(true||false); //Al usar ||, solo una de ambas variables debe ser true, con que uno de los dos esté en true, es suficiente para que salga true, en el ejemplo saldrá true
console.log(false||false); //En el ejemplo saldrá False

console.log("\n***************** Arreglos ***********************\n");
let listaDeNumeros = [2, 3, 5, 7, 11, 234]; //se usa en general dentro de un bloque de código

console.log(listaDeNumeros[5]); //Llama al valor ubicado en la posición indicada dentro de []

listaDeNumeros.push(16); //agrega dos valores al arreglo establecido usando el operador.push
listaDeNumeros.push(934);

console.log(listaDeNumeros);//Muetra el arreglo
console.log(listaDeNumeros.length); //Muestra la longitud del arreglo usando .length

let listaDePalabras = ["Papa", "Queso", "yoghurt", "memela"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

let palabra = "Alexis";
console.log(palabra[3]);
console.log(palabra.length);

console.log("\n***************** Objetos ***********************\n");

let explorer = {
    nombre: "Nombre del explorer",
    email: "email@innovaccion.mx",
    numReg: 12345,
    mision: "FrontEnd",
    Proyectos: ["Abogabot, Taquería, Pastelería, Vacunas"],
    proPer:{
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}

console.log(explorer);
console.log(explorer.numReg)
console.log(explorer.proPer.escolar)

console.log("\n***************** FLUJOS CONDICIONALES ***********************\n");

let number3 = 4;
let number4 = 2;
console.log("\n********* If / else ***********\n");

if(number3 > number4 && number3>5) {
    console.log("El número 3 es mayor que número 4");
}
else if(number3 == number4 || number3 < 3 ) {
    console.log("los números son iguales");
}
else{
    console.log("El número 2 es mayor que número 1");
}