const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}

//const nombre = producto.nombre;

console.log(producto);

//Destructuring

const { nombre, precio, disponible} = producto;
console.log(nombre, precio, disponible);
console.log(precio);
console.log(disponible);