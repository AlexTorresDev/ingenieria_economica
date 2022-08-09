function calcularAnualidadFuturo() {
    //s
    var valorcuotaf = document.getElementById("valorcuotaf").value;
    var interesf = document.getElementById("interesf").value;
    var tiempof = document.getElementById("tiempof").value;
    var vf = document.getElementById("vf").value;

    if (valorcuotaf != 0 && vf == 0) {
        ValorFuturo(valorcuotaf, interesf, tiempof);
    }
    else if (valorcuotaf == 0 && vf != 0) {
        ValorCuotaFuturo(valorcuotaf, interesf, tiempof, vf);
    }
    else if (valorcuotaf < 0 || interesf < 0 || tiempof < 0 || vf < 0) {
        alert('ingrese solo valores positivos');
        document.getElementById("ValorFuturo").innerHTML = null;
    }
    else if (valorcuotaf == 0 || interesf == 0 || tiempof == 0) {
        alert('ingrese todos los valores');
        document.getElementById("ValorFuturo").innerHTML = null;
    } else if (valorcuotaf != 0 && vf != 0) {
        alert('ingrese  solo un valor ');
        document.getElementById("ValorFuturo").innerHTML = null;
    }
}

function ValorFuturo(valorcuotaf, interesf, tiempof) {
    let inte = interesf / 100;
    var tasa = Math.pow((1 + inte), tiempof)
    var result = valorcuotaf * ((tasa - 1) / inte)
    document.getElementById("ValorFuturo").innerHTML = result;
}

function ValorCuotaFuturo(valorcuotaf, interesf, tiempof, vf) {
    let inte = interesf / 100;
    var tasa = Math.pow((1 + inte), tiempof)
    let result = vf / ((tasa - 1) / inte);
    console.log(tasa, result);
    document.getElementById("ValorFuturo").innerHTML = result;
}

function calcularAnualidadPresente() {
    //P
    var valorcuota = document.getElementById("valorcuota").value;
    var interes = document.getElementById("interes").value;
    var tiempo = document.getElementById("tiempo").value;
    var vp = document.getElementById("vp").value;


    if (valorcuota == 0 && vp != 0) {
        valorCuota();
    }
    else if (valorcuota != 0 && vp == 0) {
        let inte = interes / 100;
        var auxtime = -1 * tiempo;
        var tasa = Math.pow((1 + inte), auxtime)
        var result = valorcuota * ((1 - tasa) / inte)
        document.getElementById("ValorPresente").innerHTML = result;
    }
    else if (valorcuota == 0 || interes == 0 || tiempo == 0) {
        alert('ingrese todos los valores');
        document.getElementById("ValorPresente").innerHTML = null;
    }
    else if (valorcuota < 0 || interes < 0 || tiempo < 0 || vp < 0) {
        alert('ingrese solo valores positivos')
        document.getElementById("ValorPresente").innerHTML = null;
    } else if (valorcuota != 0 && vp != 0) {
        alert('debe ingresar un solo valor')
        document.getElementById("ValorPresente").innerHTML = null;
    }

}


function valorPresente(valorcuota, interes, tiempo) {
    let inte = interes / 100;
    var auxtime = -1 * tiempo;
    var tasa = Math.pow((1 + inte), auxtime)
    var result = valorcuota * ((1 - tasa) / inte)
    document.getElementById("ValorPresente").innerHTML = result;

}

function valorCuota() {
    var vp = document.getElementById("vp").value;
    var interes = document.getElementById("interes").value;
    var tiempo = document.getElementById("tiempo").value;
    let inte = interes / 100;
    var auxtime = -1 * tiempo;
    var tasa = Math.pow((1 + inte), auxtime)
    let result = vp / ((1 - tasa) / inte);
    //console.log('el valor de la  cuota es  ', result);
    document.getElementById("ValorPresente").innerHTML = result;
}

function reset() {

}