const carrito = [];

//Definir un producto
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Licuadora',
    precio: 800
}

const producto4 = {
    nombre: 'Licuadora2',
    precio: 800
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
console.table(carrito);

//Destructuring
const {nombre} = producto4;
console.log(nombre);
console.log(producto4);

//Destructuring con arreglos
const numeros = [10,20,30,40,50];

const [ , , tercero, ...cuarto] = numeros;
console.log(tercero);
console.log(cuarto);


