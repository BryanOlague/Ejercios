// crea una clase persona que tenga nombre, edad y un metodo saludar()

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }

    mayorEdad (){
        if (this.edad >= 18){
            console.log(`${this.nombre} es mayor de edad`)
        }else console.log(`${this.nombre} es menor de edad`)
    }
}

const persona = new Persona("Bryan Alejandro",15);
persona.saludar();
persona.mayorEdad();  

// crear una clase CuentaBancaria. propiedades titular saldo
// Metodos depositar (cantidad) , retirar (cantidad), verSaldo() 
// regla: No permitir retirar mas dinero del que hay 

class CuentaBancaria {
    constructor(titular,saldo){
        this.titular = titular
        this.saldo = saldo
    }

    depositar(cantidad) {
        this.saldo += cantidad;
    }

    retirar(cantidad){
        if (cantidad > this.saldo){
            console.log(`No tiene sufienciente saldo para retirar`)
        }else this.saldo -= cantidad;
    }

    verSaldo(){return console.log("Su saldo es:",this.saldo)}
}

const cuenta = new CuentaBancaria("Bryan Alejandro Olague",0);
cuenta.depositar(1000);
cuenta.verSaldo();
cuenta.retirar(400);
cuenta.verSaldo();
cuenta.retirar(700);

// crea una clase base animal, luego crea 2 clases que hereden 
// sobrescribir el metodo

class Animal {
    constructor(nombre, edad){
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.nombre = nombre
        this.edad = edad
    }

    hacerSonido(){
        throw new Error("Error");
    }

    presentarse(){
        throw new Error("Error");
    }
}

class Gato extends Animal{
    hacerSonido(){
        console.log(`Miau!`)
    }

    presentarse(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años, Miau!`)
    }
}

class Perro extends Animal{
    hacerSonido(){
        console.log(`Guau!`)
    }

    presentarse(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años, Guau!`)
    }
}

const perro = new Perro ("Mina",5);
perro.presentarse();
perro.hacerSonido();

const gato = new Gato("Michi",7);
gato.presentarse();
gato.hacerSonido();