let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error') ;   
});

/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);*/
/*miPromesa.then( valor => console.log(valor))
.catch(error => console.log(error));*/

let promesa = new Promise((resolver)=>{
    //console.log('inicio promesa');
    setTimeout(()=> resolver('Saludos con promesa y timeout'),3000);
    //console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que una funcion va a regresar una promesa
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });

    console.log( await miPromesa);
}

//funcionConPromesaYAwait();

//promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    console.log('inicio de función');
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver('promesa con await y timeout'),3000);
    });
    console.log( await miPromesa);
    console.log('fin de función');
}

funcionConPromesaAwaitTimeout();