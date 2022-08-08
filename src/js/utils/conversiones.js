import * as interest from './tasa-interes.js';

/**
 * Convierte la tasa de interes a decimales usando dependiendo de si está en `i` o en `j`
 * @param {La modalida de pago} modalidadPago 
 * @param {El interes en porcentaje} i 
 * @param {La modalida de interes, usar las definidas en `tasa-interes.js`} modalidadInteres 
 * @returns 
 */
export const convertInterest = (modalidadPago, i, modalidadInteres) => {
    let val = interest.interestJ.filter(k => k.name === modalidadInteres);

    if (val.length > 0) {
        i = (i / val[0].value) / 100;
    } else {
        i /= 100;
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

        let value = Math.pow((1 + i), n);
        i = Math.pow(value, 1 / m) - 1;
    }

    return i;
}

/**
 * Calcula la cuota usando la formula de valor presente
 * @param {Es el valor de la deuda} p 
 * @param {Es el interes en decimal} i 
 * @param {Es el número de cuotas} n 
 * @returns La cuota
 */
export const calculateFee = (p, i, n) => {
    let bottomPart = (1 - Math.pow(1 + i, (n * -1))) / i;
    let a = p / bottomPart;

    return parseFloat(a.toFixed(3));
}

/**
 * Convierte un valor a pesos colombianos
 * @param {El valor a convertir} value 
 * @returns 
 */
export const convertNumber = (value) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
}