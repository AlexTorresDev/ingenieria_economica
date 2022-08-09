import './main.js';
import * as conv from './utils/conversiones.js';

// Get the form and table
const form = document.getElementById("formulario-amortizacion");
const table = document.getElementById("tabla-amortizacion");
const data = document.getElementById("datos-amortizacion");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;

    if (form.checkValidity()) {
        // Get the values from the form
        const valorDeuda = parseFloat(form.valorDeuda.value);
        const numPagos = parseInt(form.numeroPagos.value);
        const modalidadPago = form.modalidadPago.value;
        const interes = parseFloat(form.interes.value);
        const modalidadInteres = form.modalidadInteres.value;

        // Calculate the interest
        const realInterest = conv.convertInterest(modalidadPago, interes, modalidadInteres);
        // Calculate the fee
        const cuota = conv.calculateFee(valorDeuda, realInterest, numPagos);



        createTable(valorDeuda, numPagos, cuota, realInterest);
    }
});

const createTable = (valorDeuda, numPagos, cuota, realInterest) => {
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
            + conv.convertNumber(saldo) + '</td><td>'
            + conv.convertNumber(valorInteres) + '</td><td>'
            + conv.convertNumber(valorCuota) + '</td><td>'
            + conv.convertNumber(amortizacion) + '</td></tr>');

        valorInteres = saldo * realInterest;

        if (saldo < valorCuota) valorCuota = saldo + valorInteres;
        else if (periodo == 0) valorCuota = cuota;

        amortizacion = valorCuota - valorInteres;
        saldo -= amortizacion;
        periodo++;
    }

    table.insertAdjacentHTML('beforeend', '</tbody>');

    data.classList.remove("invisible");
}
