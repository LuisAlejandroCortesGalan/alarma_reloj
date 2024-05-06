function numAleatorio(min, max) {
    return Math.random() * (max - min + 1) + min;
}


setInterval(() => {

    document.querySelector('body').style.backgroundColor =
        `rgb(${numAleatorio(200, 255)}, ${numAleatorio(200, 255)}, ${numAleatorio(200, 255)} )`

}, 1000);




// Mostrar segundos
setInterval(() => {
    let date = new Date().toLocaleTimeString();
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    document.querySelector('#time').innerText = `${date}`;
}, 1000);


setInterval(() => {
    document.querySelector('#time').style.color = `rgb(${numAleatorio(0, 100)}, ${numAleatorio(0, 100)}, ${numAleatorio(0, 100)} )`
}, 1000);

setInterval(() => {
    document.querySelector('.container').style.borderColor = `rgb(${numAleatorio(0, 100)}, ${numAleatorio(0, 100)}, ${numAleatorio(0, 100)} )`
}, 1000);




document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("formulario");

    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío por defecto del formulario

        // Obtener los valores de los campos de entrada
        var hora = parseInt(document.querySelector('#hora').value);
        var minuto = parseInt(document.querySelector('#minuto').value);
        var segundo = parseInt(document.querySelector('#segundo').value);

        // Verificar si la alarma debe sonar
        setInterval(() => {
            var ahora = new Date();
            var horaActual = ahora.getHours();
            var minutoActual = ahora.getMinutes();
            var segundoActual = ahora.getSeconds();

            if (horaActual === hora && minutoActual === minuto && segundoActual === segundo) {
                document.querySelector("#alarm").play();
            }
        }, 1000); // Comprobar cada segundo
    });
});


function pararAlarma() {
    document.querySelector("#alarm").pause();
}