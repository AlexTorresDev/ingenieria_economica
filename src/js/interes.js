import './main.js';



const form = document.getElementById("interes-simple");
const formCompuesto = document.getElementById("interes-compuesto");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const valor = (form.ValorPrestamo.value);
    const interes = parseFloat(form.portentaje.value);
    const tiempo = parseFloat(form.tiempo.value);
    calcularInteresSimple(valor, interes, tiempo);
});


formCompuesto.addEventListener("submit", function (event) {
    event.preventDefault();
    const valor = (formCompuesto.valorInteresCompuesto.value);
    const interes = parseFloat(formCompuesto.tasaCompuesta.value);
    const tiempo = parseFloat(formCompuesto.time.value);
    calcularInteresCompuesto(valor, interes, tiempo);
});

const calcularInteresSimple = (valorp, tasa, time) => {
    console.log(valorp, tasa, time)
    if (valorp < 0 || tasa < 0 || tasa < 0) {
        alert('No se aceptan valores negativos');
        document.getElementById("resultado").innerHTML = null;
    }
    else if (valorp == 0 || tasa == 0 || time == 0) {
        alert('Ingrese todos los valores');
    } else {
        let result = valorp * (tasa / 100) * time;
        document.getElementById("resultado").innerHTML = result;
    }
}

const calcularInteresCompuesto = (valorP, tasa, tiempoCompuestp) => {
    //var valorP = document.getElementById("valorInteresCompuesto").value;
    //var tasa = document.getElementById("tasaCompuesta").value;
    //var tiempoCompuestp = document.getElementById("time").value;

    if (valorP < 0 || tasa < 0 || tiempoCompuestp < 0) {
        alert('No se aceptan valores negativos');
        document.getElementById("resultadoCompuesto").innerHTML = null;
    }
    else if (valorP == 0 || tasa == 0 || tiempoCompuestp == 0) {
        alert('Ingrese todos los valores');
    } else {
        var tasaMultiplicar = Math.pow((1 + (tasa / 100)), tiempoCompuestp)
        let resultado = valorP * tasaMultiplicar;
        document.getElementById("resultadoCompuesto").innerHTML = resultado;
    }

}
