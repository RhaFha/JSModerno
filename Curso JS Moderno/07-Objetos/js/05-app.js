const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m',
        },
        fabricacion: {
            pais: 'Mexico',

        }
    }
}

console.log(producto);


console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);
