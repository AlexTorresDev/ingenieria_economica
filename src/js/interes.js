function calcularInteresSimple() {
    var valorprestamo = document.getElementById("ValorPrestamo").value;
    var portentaje = document.getElementById("portentaje").value;
    var tiempo = document.getElementById("tiempo").value;
    //portentaje  
    if (valorprestamo < 0 || portentaje < 0 || tiempo < 0) {
        alert('No se aceptan valores negativos');
        document.getElementById("resultado").innerHTML = null;
    }
    else if (valorprestamo == 0 || portentaje == 0 || tiempo == 0) {
        alert('Ingrese todos los valores');
    } else {
        let result = valorprestamo * (portentaje / 100) * tiempo;
        document.getElementById("resultado").innerHTML = result;
    }
}

function calcularInteresCompuesto() {
    var valorP = document.getElementById("valorInteresCompuesto").value;
    var tasa = document.getElementById("tasaCompuesta").value;
    var tiempoCompuestp = document.getElementById("time").value;

    if (valorP < 0 || tasa < 0 || tiempoCompuestp < 0) {
        alert('No se aceptan valores negativos');
        document.getElementById("resultadoCompuesto").innerHTML = null;
    }
    else if (valorP == 0 || tasa == 0 || tiempoCompuestp == 0) {
        alert('Ingrese todos los valores');
    } else {
        var tasaMultiplicar = Math.pow((1 + (tasa / 100)),tiempoCompuestp)
        let resultado = valorP*tasaMultiplicar;
        document.getElementById("resultadoCompuesto").innerHTML = resultado;
    }

}
