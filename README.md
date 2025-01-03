# Calculadora con Funciones de Orden Superior

Este proyecto muestra cómo crear una calculadora en JavaScript utilizando funciones de orden superior. La calculadora puede realizar operaciones básicas como suma y resta.

## Funcionalidades

- Suma de dos números.
- Resta de dos números.
- Puedes pasar cualquier operación matemática a la calculadora usando funciones de callback.

## Código de Ejemplo

```javascript
function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function calculadora(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calculadora(1, 2, sumar));  // Resultado: 3
console.log(calculadora(1, 2, restar)); // Resultado: -1
