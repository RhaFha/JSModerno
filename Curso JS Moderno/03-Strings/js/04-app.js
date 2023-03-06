const producto = '                  Monitor 20 pulgadas          ';
console.log("🚀 ~ file: 04-app.js:2 ~ producto:", producto);
console.log(producto.length);

console.log( producto.trimStart() );
console.log(producto.length);
console.log( producto.trimEnd() );
console.log(producto.length);
console.log(producto.trimStart().trimEnd());

console.log( producto.trim());
