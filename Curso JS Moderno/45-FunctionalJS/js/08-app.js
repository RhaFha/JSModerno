const suma = (a,b,c) => { return a + b + c};

const parcial = (a) => (b, c) => suma(a,b,c);

const primerNumero = parcial(5);
const resultado = primerNumero(5,5);



const resultad2 = parcial(4)(1,4);

console.log(suma(1,2,3));
console.log(resultado);

