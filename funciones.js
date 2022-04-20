const cuadrado = function(x){
    return x * x;
}
let numero = 4;

console.log(cuadrado(numero));
console.log(cuadrado(12));

const ruido = function () {
    console.log("BOOOOM");
}

ruido();

const exponencial = function (base,exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++){//se va incrmeentando el exponente de uno en uno hasta llegar al valor proporcionado
        resultado *= base;
    }
    return resultado;
}

console.log(exponencial (3,9));
console.log(exponencial (3,3));

console.log(sumar(2,8)); //lo ideal es poner todas las fórmular arriba y luego los parámetros abajo, no importa donde pongas la fórmula, siempre se buscará y ejecutará cuando se llame
function sumar(x,y){
    return x + y;
}

const restar = (a,b) => {
    return a - b;
}
console.log( restar(10, 5));

function saludar(quien){
    console.log("Hola "+ quien);
}
saludar("Regina");
console.log("bye");