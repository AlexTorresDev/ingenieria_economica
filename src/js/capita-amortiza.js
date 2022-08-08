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

    const isValid = validateFields(valorDeuda, numPagos, modalidadPago, interes, modalidadInteres);

    if (!isValid) return;

    let realInterest = convertInterest(modalidadPago, interes, modalidadInteres);

    let cuota = calculateFee(valorDeuda, realInterest, numPagos);

    let table = document.getElementById("tabla-amortizacion");

    let periodo = 0;
    let saldo = valorDeuda;
    let valorInteres = 0;
    let valorCuota = 0;
    let amortizacion = 0;

    table.innerHTML = "";

    table.insertAdjacentHTML('beforeend',
        `<thead>
            <tr>
                <th scope="col">Periodo</th>
                <th scope="col">Saldo</th>
                <th scope="col">Interes</th>
                <th scope="col">Cuota</th>
                <th scope="col">Amortización</th>
            </tr>
        </thead><tbody>`
    );

    while (periodo <= numPagos) {
        table.insertAdjacentHTML('beforeend', '<tr><th scope="row">'
            + periodo + '</th><td>'
            + convertNumber(saldo) + '</td><td>'
            + convertNumber(valorInteres) + '</td><td>'
            + convertNumber(valorCuota) + '</td><td>'
            + convertNumber(amortizacion) + '</td></tr>');

        valorInteres = saldo * realInterest;

        if (saldo < valorCuota) {
            valorCuota = saldo + valorInteres;
        } else {
            if (periodo == 0) valorCuota = cuota;
        }

        amortizacion = valorCuota - valorInteres;
        saldo -= amortizacion;
        periodo++;
    }

    table.insertAdjacentHTML('beforeend', '</tbody>');
});

function validateFields(valorDeuda, numPagos, modalidadPago, interes, modalidadInteres) {
    return valorDeuda > 0 && numPagos > 0 && modalidadPago != "" && interes > 0 && modalidadInteres != "" && (interes < 1 && interes >= 100);
}

function convertInterest(modalidadPago, interest, modalidadInteres) {
    let val = interestJ.filter(k => k.name === modalidadInteres);

    if (val.length > 0) {
        interest = (interest / val[0].value) / 100;
    } else {
        interest /= 100;
    }

    if (val.length > 0 && modalidadPago != val[0].value) {
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
    let bottom = (1 - Math.pow(1 + interes, (numeroPagos * -1))) / interes;
    let valorCuota = valorDeuda / bottom;

    return parseFloat(valorCuota.toFixed(3));
}

function convertNumber(number) {
    let num = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(number);
    return num;
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