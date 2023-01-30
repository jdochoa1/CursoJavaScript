let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        //return this.nombre + ' ' + this.apellido;
       return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ,' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de call para usar el metodo nombre completo de prsona1

console.log(persona1.nombreCompleto('Licenciado', '44332255'));

console.log(persona1.nombreCompleto.call( persona2,'Ingeniero', '123456' ));

//Uso de Apply

console.log(persona1.nombreCompleto('Licenciado', '44332255'));

let arreglo = ['Ingeniero', '443256'];
console.log(persona1.nombreCompleto.apply( persona2, arreglo));