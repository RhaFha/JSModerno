const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 400},
    {nombre: 'Licuadora', precio: 200},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Clima', precio: 800},
]

console.table(carrito);

const nuevoArreglo = carrito.forEach( producto => console.log( `${producto.nombre} - Precio: ${producto.precio}`) );

const nuevoArreglo2 = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}` );

console.log(nuevoArreglo);
console.log(nuevoArreglo2);