const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

meses.forEach( (mes, index) => {
    if( mes === "Enero"){
        console.log(`Encontrado en el indice ${mes}`);
    }
})


//Encontrrar el indice de Abril
const indice = meses.findIndex((mes) => { return mes === 'Diciembre'});
console.log(indice);

//Encontrar un indice en un arreglo de objetos
const indice2 = carrito.findIndex((producto) => {
    return producto.precio === 100;
})
console.log(indice2);