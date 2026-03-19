// 1. Crea una funcion que retorne a otra funcion

function areaTriangulo (base,altura) {
    let calculo =  base * altura;
    return function(){
        let resultado = calculo / 2;
        console.log(`El area del triangulo es: ${resultado}`)
    }
}

const resultado = areaTriangulo(5,3);
resultado();

// 2. implementa una funcion currificada que multiplique 3 numeros 

function multiplicacion (...numeros){
    let result = 1;
    for(let numero of numeros){
        result *= numero;
    }
    return result;
}

console.log(`La multiplicacion es: ${multiplicacion(1,5,5)}`)

// 3. Desarrolla una funcion recursiva que calcule la potencia de un numero elevado a un exponente

function potencia (base,exponente){
    if (exponente === 1){
        return base;
    } else if (exponente <= 0){
        return 0;
    }
    return base * potencia(base,exponente - 1);
}

console.log(`El resultado de la potencia es: ${potencia(2,3)}`);

// 5. crear una funcion sumManyTimes(multiplier, ...numbers) que primero sume todos los numeros y luego el resultado por multiplier 

function sumManyTimes (multiplier, ...numbers){
    let resultSum = 0; 
    for (let number of numbers){
        resultSum += number;
    }

    return resultSum * multiplier;
}

console.log(`El resultado de la funcion sumManyTimes es: ${sumManyTimes(5,4,3,2,6,5,6)}`)

// 4.crea una funcion createCounter() que reciba un valor inicial y retorne un objeto con metodos para incrementar(), decrementar(), y getvalue(), utilizando un closure para mantener el estado

function createCounter (value){
    let count = value;
    return {
        increment: function(){
            count ++;
        },
        decrement: function(){
            count --;
        },
        getValue: function(){
            return count;
        }
    }
}

const count = createCounter(10);
count.increment();
count.increment();
console.log(`Contador: ${count.getValue()}`);
count.decrement();
console.log(`Contador: ${count.getValue()}`);
count.getValue();
console.log(`Contador actual: ${count.getValue()}`);