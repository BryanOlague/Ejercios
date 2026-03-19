// forEach

let numbers = [1,2,3,4,5];
numbers.forEach(number => console.log(number))   // el forEach funciona para avanzar dentro de un array

// map

let double = numbers.map(number => number * 2);     // el map tambien recorre dentro del array pero este 
console.log(double);                                    // crea un nuevo array

// filter 

let pares = numbers.filter(number => number % 2 ===0);  // crea un nuevo array donde solo muestra los datos 
console.log(pares);                                     // que cumplen el filtro

// reduce

let sum = numbers.reduce((antes , despues) => antes + despues);  //reduce todo a un numero o a un avlor 
console.log(`El resultado de la suma es: ${sum}`);                  // en este caso hace la suma de todo el array 

// para reduce se utiliza el antes y despues para el valor que se va modificando
// funciones de oredn superior


// - Manipulacion de array -------------------------------------

// flat (aplanar)

let nestedArray = [1,[2,[3,[4]]]];     // flat deja solo un array cuando hay muchos
console.log(nestedArray);               
let flatArray = nestedArray.flat(3); // dependiendo de los arrays que tenga es el numero que esta dentro
console.log(flatArray);

// flatMap

let frases = ["Bryan Olague", "Alejandro Marquez"];
let words = frases.flatMap(frase => frase.split(" "));   //flatMap es lo contrario de flat este puedo crear
console.log(words);                                     //de un arreglo varios arreglos dependiendo la situacion 

// split: corta el array dependiendo del caracter. en ese ejemplo corta el array donde haya un espacio 
// vacio y crea otro array con lo siguiente 


// criterios de ordenacion
// sort 

let unsorted = ["rojo","azul","blanco","celeste"];          // sort ordena string por orden alfabetico
let sorted = unsorted.sort();                                   

console.log(`Colores por orden alfabetico: ${sorted}`);

unsorted = [3,4,1,6,10];                                // para ordenar numeros tenemos que agregar     
sorted = unsorted.sort((a,b) => a-b);                   //lo que tiene que hacer para que ordene los numeros
console.log(sorted);

// reverse

sorted.reverse();
console.log(sorted);     // reverse muestra el array de forma reversa 

// busqueda ------------

// includes 
console.log(sorted.includes(4));
console.log(sorted.includes(5));        // muestra true o false si encuentra el valor en el array


// find 

let firstEven = sorted.find(element => element % 2 === 0);
console.log(firstEven);         // encuentra y muestra el primer valor dependiendo lo que se busca 
                                // en este caso un numero par 


// findIndex 

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0);
console.log(firstEvenIndex);  // muestra el index donde se encuentra el primer elemento que se busca 
// si no enceuntra nningun valor va a muestra -1 


//sets avanzados: OPeraciones 
// Eliminacion de duplicados 

let numbersAray = [1,2,2,3,4,5,6,6];        //el set no acepta duplicados 
numbersAray = [...new Set(numbersAray)];    // para haecr que el array no acepte duplicados utilizamos el spred
console.log(`Esto es un array sin duplicados ${numbersAray}`); // y el set 

// union de set

const setA = new Set ([1, 2, 3]);               // une dos set sin duplicados
const setB = new Set ([2, 3, 4, 5]);
const union = new Set ([...setA, ...setB]);     // el ... es para que tome a los dos juntos
console.log(union);

// interseccion

const intersection = new Set ([...setA].filter(element => setB.has(element)));
console.log(intersection); //  sirve para ver que numero se repite en los dos set
//utilizamoos un filter para decir que elemento tiene del b en el a

// diferencia 

const difference = new Set([...setA].filter(element => !setB.has(element)));
console.log(difference);

// SET AVANZADOS 
//Conversiones
// Iteraciones 

setA.forEach(element => console.log(element));   // de esta forma podemos iterar sobre un array 

// iteraciones map 

let myMap = new Map([           // para poder iterar sobre un mapa utilizamos key y value 
    ["name","Bryan"],
    ["age",24],
])

myMap.forEach((value,key) => console.log(`${key}: ${value}`)); 

// conversion de map
// mapa a array

const arrayFromMap = Array.from(myMap);  // convertimos map en un array
console.log(arrayFromMap);

// mapa a objeto
const objectFromMap = Object.fromEntries(myMap);
console.log(objectFromMap);

// objecto a mapa 

const mapFromObject = new Map(Object.entries(objectFromMap));
console.log(mapFromObject);