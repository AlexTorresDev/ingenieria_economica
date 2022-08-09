import * as inter from './tasa-interes.js';

/**
 * Convierte la tasa de interes a decimales usando dependiendo de si está en `i` o en `j`
 * @param {La modalida de pago} modalidadPago 
 * @param {El interes en porcentaje} i 
 * @param {La modalida de interes, usar las definidas en `tasa-interes.js`} modalidadInteres 
 * @returns 
 */
export const convertInterest = (modalidadPago, i, modalidadInteres) => {
    // Busca la modalidad de interes en la lista de j
    let val = inter.interestJ.filter(k => k.name === modalidadInteres);

    i /= 100;

    // Si la modalidad de interes esta en j
    if (val.length > 0) {
        i /= val[0].value;
    } else {
        // Busca la modalidad de interes en la lista de i
        val = inter.interestI.filter(k => k.name === modalidadInteres);
    }
    
    const valueI = val[0].value;

    // Valida si no están en el mismo periodo de tiempo el pago y el interes, si es asi, los convierte al mismo periodo de tiempo
    if (modalidadPago != valueI) {
        const n = valueI;
        const m = parseInt(modalidadPago);
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