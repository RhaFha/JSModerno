const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function (){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

console.log( Object.keys( producto ));

console.log( Object.values( producto ));

console.log( Object.entries( producto ));