//No es posible crear objetos antes de declarar la clase
// no se aplica hoisting a diferencia de las funciones
//let persona2 = new Persona()

class Persona{

    static contadorPersona = 0;//atributo de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
        this.idPersona = ++Persona.contadorPersona;
    }
    else{
        console.log('se ha superado el maximo permitido');
    }
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase padre
    toString(){
        //se aplica polimorfismo
        return this.idPersona + ' ' + this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);

    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
    


}



let persona1 = new Persona('Juan', 'Perez');
console.log( persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1.toString());

console.log( Persona.contadorPersona);

let persona2 = new Persona('Karla', 'Ramirez');
console.log( persona2.toString());
console.log( Persona.contadorPersona);

console.log( Persona.MAX_OBJ);

let persona3 = new Persona('Mariano','Ospina');
let persona4 = new Persona('Armando', 'Toledo');
let persona5 = new Persona('Laura','Quintero');
console.log(persona5.toString());