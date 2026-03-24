// Factorial de un numero 

function factorial (num) {
    if (num === 1){
        return num;
    }
    return num *= factorial(num-1);
}
let num = 4;
console.log(`El fatorial de ${num} es: ${factorial(num)}`)

// Crea una funcion que reciba un array y debe devolver el total (utiliza reduce)

let producto = [
    {nombre: "Laptop", precio: 1000, cantida: 2},
    {nombre: "Mouse", precio:50, cantida: 3},
]

function calcularTotal (){
    let sum = producto.reduce((a,b) =>
        a + (b.precio * b.cantida),0
    )
    return sum;
}

console.log(`El precio total a pagar es de: `, calcularTotal());