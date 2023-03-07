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

carrito.unshift(producto);
carrito.unshift(producto2);
carrito.unshift(producto3);
carrito.unshift(producto4);
console.table(carrito);

//eliminar el ultimo elemento
// carrito.pop();

console.table(carrito);

//eliminar el primer elemento
// carrito.shift();
console.table(carrito);


carrito.splice(1,2);
console.table(carrito);