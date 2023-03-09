const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre'];
const meses3 = ['Noviembre', 'Diciembre'];

const meses4 = meses.concat(meses2, meses3);
console.log(meses4);


//spread operator
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);