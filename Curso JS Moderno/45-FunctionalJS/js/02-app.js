const suma = (a,b) => a + b;
const multiplicar = (a,b) => a * b;

const sumarOMultiplicar = fn => fn(10,10);

console.log(sumarOMultiplicar( suma));
console.log(sumarOMultiplicar( multiplicar));

console.log('hola');