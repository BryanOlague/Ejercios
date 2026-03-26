// clases avanzadas

class Person {                              // clase
    constructor(name, age){                 //constructor
        this.name = name
        this.age = age
    }

    greet(){                                        // una funcion dentro de una clase 
        console.log(`Hola, soy ${this.name}`)
    }
}

const person =  new Person("Bryan", 24);        //llamamos a la clase agregando una persona 


// clase abstracta 

class Animal {
    constructor (name){
        if(new.target === Animal){
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name;
    }

    makeSound(){
        throw new Error("Este metodo tiene que ser implementado por la subclase")
    }
}

//Va a marcar un error si intentamos llamar a la clase abstracta directamente 
/* const animal = new Animal("Vaca")
console.log(animal); */


//Polimorfismo 

class Cat extends Animal {                  // es una clase que extiende con la clase abstracta 
    makeSound(){
        console.log("Miua!")                // utilizamos la funcionq ue habiamos hecho en la clase abstracta y aqui le damos la funcion 
    }
}

class Dog extends Animal {
    makeSound(){
        console.log("Guau!")
    }
}

const cat = new Cat("Michi")        // creanmos una constante utilizando la clase Cat 
console.log(cat)
cat.makeSound();

const dog = new Dog ("kiara")       // creamos una constante utiliazndo la clase Dog
console.log(dog)
dog.makeSound();                    //llamamos la funcion makeSound


// Mixins 

const FlyMixin = {
    fly(){
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal {}

class Dragon extends Animal{}

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird ("Pajaro")
console.log(bird.name)
bird.fly();

const dragon = new Dragon("NuevoDragon")
console.log(dragon.name)
dragon.fly();

// patrones de diseño
// patron singleton     
// Solo se puede instancia una sola vez en todo el codigo

class Session {
    constructor(name){
    if (Session.instance){                      //Hacemos que solo se pueda instancia una vez 
        return Session.instance
    }
    this.name = name
    Session.instance = this                     
    }
}

const session1 = new Session("Bryan Olague")
const session2 =  new Session()                     // ppor mas que creemos otra session siempre tendra el valor de la primera session 
console.log(session1.name)
console.log(session2.name)

console.log(session1 === session2)

const session3 = new Session ("Alejandro")
console.log(session3.name);




