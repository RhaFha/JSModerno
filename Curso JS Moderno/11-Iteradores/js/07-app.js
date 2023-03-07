const pendientes = ['Tareas', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 400},
    {nombre: 'Licuadora', precio: 200},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Clima', precio: 800},
];

for ( pendiente of pendientes ) {
    console.log(pendiente);
}

for ( producto of carrito ) {
    console.log(producto.nombre);
}