


const obtenerCliente = () => {
    const nombre = 'Rafa';

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();