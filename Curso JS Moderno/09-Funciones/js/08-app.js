
function sumar( a, b ){
    return a + b;
}

const resultado = sumar( 1, 1 );

console.log(resultado);

//Ejemplo mas avanzado

let total = 0;
function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuestos(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(400);
total = agregarCarrito(900);

const totalPagar = calcularImpuestos(total);

console.log(totalPagar);