import './main.js';


const formpresente = document.getElementById("valor-presente");
const formfuturo = document.getElementById("valor-furuto");


formpresente.addEventListener("submit", function (event) {
    event.preventDefault();
    const valor = (formpresente.valorcuota.value);
    const interes = parseFloat(formpresente.interes.value);
    const tiempo = parseFloat(formpresente.tiempo.value);
    const vp = (formpresente.vp.value);
    calcularAnualidadPresente(valor, interes, tiempo, vp);
});

formfuturo.addEventListener("submit", function (event) {
    event.preventDefault();
    const valor = (formfuturo.valorcuotaf.value);
    const interes = parseFloat(formfuturo.interesf.value);
    const tiempo = parseFloat(formfuturo.tiempof.value);
    const vf = (formfuturo.vf.value);
    calcularAnualidadFuturo(valor, interes, tiempo, vf);
});

const calcularAnualidadFuturo = (valor, interes, tiempo, vf) => {
    /* //s
     var valorcuotaf = document.getElementById("valorcuotaf").value;
     var interesf = document.getElementById("interesf").value;
     var tiempof = document.getElementById("tiempof").value;
     var vf = document.getElementById("vf").value;*/

    if (valor != 0 && vf == 0) {
        ValorFuturo(valor, interes, tiempo);
    }
    else if (valor == 0 && vf != 0) {
        ValorCuotaFuturo(valor, interes, tiempo, vf);
    }
    else if (valor < 0 || interes < 0 || tiempo < 0 || vf < 0) {
        alert('ingrese solo valores positivos');
        document.getElementById("ValorFuturo").innerHTML = null;
    }
    else if (valor == 0 || interes == 0 || tiempo == 0) {
        alert('ingrese todos los valores');
        document.getElementById("ValorFuturo").innerHTML = null;
    } else if (valor != 0 && vf != 0) {
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

const calcularAnualidadPresente = (valor, interes, tiempo, vp) => {
    //P
    /*  var valorcuota = document.getElementById("valorcuota").value;
      var interes = document.getElementById("interes").value;
      var tiempo = document.getElementById("tiempo").value;
      var vp = document.getElementById("vp").value;*/

    console.log(valor, interes, tiempo, vp, 'estos son los valores')
    if (valor == 0 && vp != 0) {
        valorCuota(valor, interes, tiempo, vp);
    }
    else if (valor != 0 && vp == 0) {
        let inte = interes / 100;
        var auxtime = -1 * tiempo;
        var tasa = Math.pow((1 + inte), auxtime)
        var result = valor * ((1 - tasa) / inte)
        document.getElementById("ValorPresente").innerHTML = result;
    }
    else if (valor == 0 || interes == 0 || tiempo == 0) {
        alert('ingrese todos los valores');
        document.getElementById("ValorPresente").innerHTML = null;
    }
    else if (valor < 0 || interes < 0 || tiempo < 0 || vp < 0) {
        alert('ingrese solo valores positivos')
        document.getElementById("ValorPresente").innerHTML = null;
    } else if (valor != 0 && vp != 0) {
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

function valorCuota(valor, interes, tiempo, vp) {
    /*  var vp = document.getElementById("vp").value;
      var interes = document.getElementById("interes").value;
      var tiempo = document.getElementById("tiempo").value;*/
    let inte = interes / 100;
    var auxtime = -1 * tiempo;
    var tasa = Math.pow((1 + inte), auxtime)
    let result = vp / ((1 - tasa) / inte);
    //console.log('el valor de la  cuota es  ', result);
    document.getElementById("ValorPresente").innerHTML = result;
}

function reset() {

}