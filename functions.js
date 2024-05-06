// sumar(1, 20);


// let sumar2 = function(num1, num2) {return num1 + num2} // funcion version normal
// sumar2 = (num1, num2) => num1 + num2 // funcion flecha
// console.log(sumar2(2, 20)); 


function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

// console.log(sumar(1, 2));


function calculadora(num1, num2, callback) {
    return callback(num1, num2) 
}

console.log(calculadora (1, 2, sumar));
console.log(calculadora(1, 2, restar));

