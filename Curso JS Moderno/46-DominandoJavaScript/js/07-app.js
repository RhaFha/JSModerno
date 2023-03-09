console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
}, 30);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
})

new Promise( function(resolve){
    resolve('Desconocido');
}).then(console.log)

console.log('Ultimo')

function hola(){
    console.log('Hola');
}

hola();