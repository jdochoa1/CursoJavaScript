//hoisting
//miFuncion(4,2);

//Declaracion de la funcion
/*function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}

//Llamando la funcion
let resultado = miFuncion(3,5);
console.log(resultado);*/

//funcion de tipo expresion
/*let sumar = function (a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};

resultado = sumar(3,6);
console.log(resultado);*/


//tipo flecha
/*const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(5,3);
console.log(resultado);*/

//Self invoking
/*(function (a,b){
    console.log("Ejecuntando la funcion = " + (a+b));
})(3,4);

console.log(typeof miFuncion);

var miFunctionTexto = miFuncion.toString();
console.log(miFunctionTexto);*/

/*let resultado = sumarTodo(5, 4, 13, 10, 9, 11, 3);
console.log( resultado );

function sumarTodo(){
    let suma = 0;
    for ( let i = 0; i < arguments.length; i++){
        suma += arguments[i]; //suma = suma + arguments
    }
    return suma;
}*/

//Paso por valor
//tipo primitivo
let x = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(x); //10
console.log(x);
//console.log(a);

const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

//Paso por referencia
cambiarValorObjeto( persona);
console.log(persona);