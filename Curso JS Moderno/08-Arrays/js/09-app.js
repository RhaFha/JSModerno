const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 400},
    {nombre: 'Licuadora', precio: 200},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Clima', precio: 800},
]

console.table(carrito);

//Cuanto mide el arreglo
console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio ${carrito[i].precio}`);
}

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});