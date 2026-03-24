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


// -- Metodos estaticos y de instancia 

function Person (name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = () => {
    console.log(`Hola, soy: ${this.name}`);
}

let new_person = new Person("Olague",27);
new_person.greet();

// Metodos avanzados 
// assign ---------------- sirve para unir las propiedades de objetos 

let personCore = {name: "Bryan"}; 
let personDetails = {age: 24, alias:"Olague"};

let fullPerson = Object.assign(personCore, personDetails);   // para unir utilizamos object.assig (Base, lo que se desea agregar)
console.log(fullPerson); // todo junto lo guardamos en un objeto

// keys, values , entries 

console.log(Object.keys(fullPerson));    // obtenemos las claves del objeto 
console.log(Object.values(fullPerson));     // obtenemos solamente los valores del objeto
console.log(Object.entries(fullPerson));        //obtenemos array con las claves y los valores 

