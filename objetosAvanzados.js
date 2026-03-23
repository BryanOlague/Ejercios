// objetos avanzados 

// Prototipos y herencia 

// prototipos.

let person = {
    name: "Bryan Alejandro",
    age: 24,
    greet () {
        console.log(`Hola, mi nombre es: ${this.name}`)
    },
}

console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`);
}

console.log(person);
person.sayAge();

//Herencia

let programmer = Object.create(person);
programmer.language = "JavaScripts";
programmer.name = "MoureDev";

console.log(person.name);
console.log(person.language);

console.log(programmer.name);
console.log(programmer.age);
console.log(programmer.language);

programmer.greet();
programmer.sayAge();

