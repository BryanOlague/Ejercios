// Trasmormador de datos (callback + array)
// Crea una funcion procesarUsuarios que reciba un array y un callback que tranforme los datos
let usuarios = [
    {nombre: "Bryan",edad: 17},
    {nombre: "Alejandro",edad: 24},         // Array con datos de usuarios 
    {nombre: "Olague",edad: 26},
];

function procesarPersonas (personas,callback){
    return personas.filter(callback);               // Funcion que llama al array y utiliza filter 
}                                                   // para filtrar los datos de acuerdo al callback

const mayores = procesarPersonas(usuarios, user => user.edad >=18);  // el resultado lo guardamos en 
console.log(`Personas mayores de edad:`, mayores);

const menores = procesarPersonas(usuarios, user => user.edad < 18);
console.log("Personar menores de edad: ", menores);

// Crea una funcion crearContador que empiece en cero tenga metodos
// incrementar
//obtener valor 
// cuando llegue al limite ya no incrementar

function crearContador(max){
    let count = 0;
        return {
        incrementar:function(){         // .incrementar para incrementar el contador
            if (count < max){
                count ++;
            }else return count;
            
        } ,
        decrementar: function(){        //.decrementar para decremenatr el contador 
            count -- ;
        },
        obtenerValor: function(){       // obtener el valor del contador
            return count;
        }
    }
    

}

let contador = crearContador(5);
contador.incrementar();
contador.incrementar();
console.log(`Contador: ${contador.obtenerValor()}`);
contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log(`Contador: ${contador.obtenerValor()}`);
contador.incrementar();
contador.decrementar();
contador.decrementar();
console.log(`Contador: ${contador.obtenerValor()}`);


//crea una funcion que mantenga una lista de tareas (usando un closure)
//permita agregarTarea eliminarTarea listarTarea

function crearGestorTareas (){
    let tareas =[];
    return{
        agregarTarea: (tarea) => {
            tareas.push(tarea);
        },
        eliminarTarea: (index) =>{          // splice sirve para eliminar un dato del array por su index
            tareas.splice(index,1);         // el numero 1 significa eliminar solamente 1
        },
        listarTareas: () => {
            return tareas;
        }
    }
}

const gestor = crearGestorTareas();
gestor.agregarTarea("Estudiar js");
gestor.agregarTarea("hacer ejercicio");
console.log(`Tareas pendientes:`,gestor.listarTareas());
gestor.eliminarTarea(0);
console.log(`Tareas pendientes:`,gestor.listarTareas());
gestor.agregarTarea("Estudiar js");
console.log(`Tareas pendientes:`,gestor.listarTareas());
gestor.eliminarTarea(1);
console.log(`Tareas pendientes:`,gestor.listarTareas());

// crear una funcion que permita 
// agregar un producto, eliminar un producto, ver carrito, total 

let productos = [
    {nombre: "Laptop", precio: 1000}
];
function crearCarrito (){
    return{
        agregarProducto: (nombreProducto,precioProducto) => {
            productos.push({nombre: nombreProducto, precio: precioProducto});
        },
        eliminarProducto: (nombreProducto) => {
            productos = productos.filter(producto => producto.nombre !== nombreProducto);
        },
        verCarrito: () => {
            return productos;
        },
        total: () => productos.reduce((a,p) => a + p.precio, 0)
            
        
    }
}

const carrito = crearCarrito ();
console.log(`Lista de carrito: `, carrito.verCarrito());   // ver listado del carrito

carrito.agregarProducto("Mouse",200);                       // Agregando un nuevo producto
console.log(`Lista de carrito: `, carrito.verCarrito());  

carrito.eliminarProducto("Mouse");
console.log(`Lista de carrito: `, carrito.verCarrito()); // Elimando un producto del carrito

carrito.agregarProducto("Teclado", 500);
console.log(`Lista de carrito: `, carrito.verCarrito()); 

console.log(`El precio total es de: `,carrito.total());     // mostrar el total 

/*
Dado un array de la siguiente forma 
const productos = [
  { nombre: "Manzana", categoria: "fruta" },
  { nombre: "Zanahoria", categoria: "verdura" },
  { nombre: "Plátano", categoria: "fruta" },
  { nombre: "Lechuga", categoria: "verdura" }
];

crea una funcion que los agrupe asi:
{
  fruta: ["Manzana", "Plátano"],
  verdura: ["Zanahoria", "Lechuga"]
}
*/

let comida = [
    {nombre: "Manzana", categoria: "fruta"},
    {nombre: "Zanahoria", categoria: "verdura"},
    {nombre: "Platano", categoria: "fruta"},
    {nombre: "Lechuga", categoria: "verdura"},
]

function agruparPorCategoria(array){
    return array.reduce((acc, producto) => {        // primero separamos por categoria 
        if (!acc[producto.categoria]){              // si la categoria es diferente a la anterior
            acc[producto.categoria] = [];              // crea un nuevo array
        }

        acc[producto.categoria].push(producto.nombre);  // al fnal solo agreganmos el nombre del producto
        return acc;
    },{});
}

const result = agruparPorCategoria(comida);
console.log(result);


// dado dos sets, encuentra la union, interseccion y diferencia entre ellos 

const setA = new Set ([1,2,3,4,5,6,6]);
const setB = new Set ([5,6,7,8,9,9]);

const unionSets = new Set ([...setA,...setB]);

const interseccion = new Set ([...setA].filter(element => setB.has(element)));

const diferencia = new Set ([...setA].filter(element => !setB.has(element)));

console.log("La union entre ellos: ",unionSets);
console.log("La interseccion entre ellos: ",interseccion);
console.log("La diferencia entre ellos: ",diferencia);


