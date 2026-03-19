// arrw funtioons avanzadas 

// retorno explicito 
const multiply = (a,b) => a * b;      // ya no hay necesidad de realizar un return 
console.log(multiply(2,5)) 

// this lexico
const handler = {
    name:"Olague",
    greeting: function (){                       //funcion normal 
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {                     // esto es un arrow funtions
        console.log(`Hola, ${this.name}`)       // en las arrow funtions this esta de forma global y no toma el valor de name
    }
}

handler.greeting();            //llamamos al objeto handler con la funcion greeting
handler.arrowGreeting();


// IIFE (EXPRESION DE FUNCION INVOCADA INMEDIANTAMENTE )

(function (){
    console.log("IIFE Clasico");           // es una funcion que se ejecuta sin necesidad de llamarla
})();

(() =>{
    console.log("IIFE con arrow funtions");
})();

// Parametros rest (...)

const sumaNumeros = (...numbers) => {     // hace una funcion y puede agregar varios parametros sin necesidad de decir cuantos 
    let result = 0;
    for(let number of numbers){             // se lee los parametros uno por uno y se van sumando 
        result += number;
    }
    return result;
}

console.log(`La suma de los numeros es: ${sumaNumeros(2,5,6,7,1)}`); // los parametros se pasan en un array 
console.log(`La suma es: ${sumaNumeros(2,5)}`);

// Operador Spread (...)

const numbers = [1,2,3];
function sumWithSpread(a,b,c){
    return a+b+c;
}

console.log(sumWithSpread(1,2,3)); // Sumando agregando los parametros normalmente
console.log(sumWithSpread(...numbers));   // el operador spread desahace el array dejando los paramentros solos

// Closures (Clausuras)

function createCounter() { 
    let counter = 0;                                            // hace que una funcione que recuerda y accede a su variable lexico
    return function () {
        counter ++;
        console.log(`Contador: ${counter}`);                    // permite que una funcion mantega datos entre ejecuciones sin usar variables globales
    }
}

const counter = createCounter();
counter()
counter()
counter()


// Recursividad 

function factorial (n) {                   // Recursividad significa que se pueda llamar asi mismo una funcion 
    if (n <= 1) {
        return 1;
    }
    return n * factorial (n - 1);           // ejemplo claro es para sacar el factorial de numero, es llamar a la misma funcion para hacerlo mas facil
}

console.log(factorial(5))

// Funciones parciales 

function partialSum (a){                     // Al crear una funcion parcial una parte de la funcion se queda constante, mientras que la otra puede cambiar 
    return (b,c) => {
        return sumaNumeros(a,b,c)               // utilizamos los tres parametros, pero la funcion es parcial 
    }
}

const sumWith = partialSum(4);       // parte constante de la funcion
console.log(sumWith(5,6));            //parte que puede cambiar dentro de la funcion 
console.log(sumWith(6,6));


// Currying 

function currySum (a){                            // el currying significa dividir una funcion dentro de otra funcion
    return (b) =>{                                  // y asi poder modificar o agregar los diferentes paramentros y deja unos constantes 
        return (c) =>{
            return (d) =>{
                return sumaNumeros(a,b,c,d);
            }
        }
    }
}

const sumAB = currySum(5)(3);                       // parametros constantes 
const sumC = sumAB(5);                              // otro parametro constante 

console.log(sumC(4));                               // parametro que cambia.   y junto a todos los paramentros se hace una suma
console.log(sumC(8));


// Callback

function processData (data,callback){                // Es utilizar una funcion y el resultado utilizarla en otra
    const result = sumaNumeros(...data);                // funcion sumar 
    callback(result);
}

function multiplyData (result, ...datos){               // Funcion multiplicar con la suma de la funcion anterior 
    let multiplyResult = 0;
    for (let dato of datos){
        multiplyResult += dato;
    }
    console.log ("El resultado es: ",multiplyResult *  result);   // imprimimos el resultado 
}

processData([1,2,3,4],res => multiplyData(res,5,1));  // llamamos a la funcion processData y dentro va otra funcion
