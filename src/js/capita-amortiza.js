// Get the values from the form
let form = document.getElementById("formulario-amortizacion");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the values from the form
    let valorDeuda = parseFloat(form.valorDeuda.value);
    let numPagos = parseInt(form.numeroPagos.value);
    let modalidadPago = form.modalidadPago.value;
    let interes = parseFloat(form.interes.value);
    let modalidadInteres = form.modalidadInteres.value;

    let realInterest = convertInterest(modalidadPago, interes, modalidadInteres);

    let cuota = calculateFee(valorDeuda, realInterest, numPagos);

    let table = document.getElementById("tabla-amortizacion");
    let tbody = table.getElementsByTagName("tbody")[0];

    let periodo = 0;
    let saldo = valorDeuda;
    let valorInteres = 0;
    let valorCuota = 0;
    let amortizacion = 0;

    while (periodo <= numPagos) {
        tbody.insertAdjacentHTML('beforeend', '<tr><th scope="row">' + periodo + '</th><td>' + saldo + '</td><td>' + valorInteres + '</td><td>' + valorCuota + '</td><td>' + amortizacion + '</td></tr>');
        valorInteres = parseFloat((saldo * realInterest).toFixed(3));

        if (saldo < valorCuota) {
            valorCuota = parseFloat((saldo + valorInteres).toFixed(3));
            amortizacion = parseFloat((valorCuota - valorInteres).toFixed(3));
            saldo -= amortizacion;
        } else {
            if (periodo == 0) valorCuota = cuota;
            amortizacion = parseFloat((valorCuota - valorInteres).toFixed(3));
            saldo -= amortizacion;
        }

        periodo++;
    }
});

function convertInterest(modalidadPago, interest, modalidadInteres) {
    const val = interestJ.filter(k => k.name === modalidadInteres);

    if (val.length > 0) {
        interest = (interest / val[0].value) / 100;
    }

    if (modalidadPago != val[0].value) {
        let n = 12;
        let m = 12;

        switch (modalidadPago) {
            case "1":
                // (1+i)^n = (1+i)^m
                // (((1+i)^n)1/m) - 1 = i
                m = 12;
                break;
            case "2":
                m = 6
                break;
            case "3":
                m = 4;
                break;
            case "4":
                m = 3;
                break;
            case "6":
                m = 2;
                break;
            case "12":
                m = 1;
                break;
        }

        let value = Math.pow((1 + interest), n);
        interest = Math.pow(value, 1 / m) - 1;
    }

    return interest;
}

function calculateFee(valorDeuda, interes, numeroPagos) {
    // A = valorDeuda/((1-(1+interes))^(-numPagos)/interes)
    let bottom = (1 - Math.pow(1 + interes, (numeroPagos * -1))) / interes;
    let valorCuota = valorDeuda / bottom;

    return parseFloat(valorCuota.toFixed(3));
}

let interestJ = [
    { name: 'NM', value: 12 },
    { name: 'NB', value: 6 },
    { name: 'NT', value: 4 },
    { name: 'NC', value: 3 },
    { name: 'NS', value: 2 },
    { name: 'MV', value: 12 },
    { name: 'BV', value: 6 },
    { name: 'TV', value: 4 },
    { name: 'CV', value: 3 },
    { name: 'SV', value: 2 },
    { name: 'CM', value: 12 },
    { name: 'CB', value: 6 },
    { name: 'CT', value: 4 },
    { name: 'CC', value: 3 },
    { name: 'CS', value: 2 }
];

let interestI = [
    { name: 'EM', value: 1 },
    { name: 'EB', value: 2 },
    { name: 'ET', value: 3 },
    { name: 'EC', value: 4 },
    { name: 'ES', value: 6 },
    { name: 'EA', value: 12 },
    { name: 'PM', value: 1 },
    { name: 'PB', value: 2 },
    { name: 'PT', value: 3 },
    { name: 'PC', value: 4 },
    { name: 'PS', value: 6 },
    { name: 'PA', value: 12 },
];