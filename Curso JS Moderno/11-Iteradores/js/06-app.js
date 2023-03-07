///forEach

const pendientes = ['Tareas', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente , indice) =>{
     console.log(`${indice} : ${pendiente}`);
});

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 400},
    {nombre: 'Licuadora', precio: 200},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Tablet', precio: 600},
    {nombre: 'Clima', precio: 800},
];

const resultado = carrito.forEach((producto, key) => {
    return {producto: producto.nombre, precio: producto.precio, disponibilidad: true};
});

const resultado2 = carrito.map((producto, key) => {
    return {producto: producto.nombre, precio: producto.precio, disponibilidad: true};
});

console.log(resultado);
console.log(resultado2);