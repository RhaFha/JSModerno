iniciarApp();

function iniciarApp(){
    console.log('Inciando app...');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere ...');
    console.log(`Usuario autenticado exitosamente: ${usuario} `);
}

