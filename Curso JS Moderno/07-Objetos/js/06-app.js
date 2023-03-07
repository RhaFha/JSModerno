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

const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;

console.log(pais);
console.log(informacion);