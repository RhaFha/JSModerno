const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); //Esto es una funccion
console.log( numero1.toString());//Esto es un metodo

//Declaracion de funcion ( Function Declaration )

function sumar(){
    console.log(2+2);
}

sumar();

//Expresion e funcion ( Fucntion Expression)
const sumar2 = function(){
    console.log(3+3);
}

sumar2();