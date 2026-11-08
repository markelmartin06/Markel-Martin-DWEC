let arr = [95, 95, 14, 83, 58, 33, 65, 52, 7, 72, 13, 46, 19, 31,
27, 36, 30, 86, 88, 88, 68, 16, 5, 14, 41, 56, 89, 11, 6, 29, 72,
11, 69, 36, 16, 11, 82, 84, 32, 84, 95, 98, 76, 99, 100, 12, 89, 1,
92, 27, 66, 48, 38, 49, 30, 40, 87, 19, 31, 37, 5, 32, 9, 33, 98,
94, 5, 15, 4, 88, 47, 34, 83, 8, 31, 4, 2, 72, 31, 39, 15, 10, 46,
78, 11, 21, 92, 22, 83, 3, 6, 71, 39, 54, 50, 77, 13, 85, 7, 36 ];

function ordenar(arr) {
    return [...arr].sort((a, b) => a - b);
}

function imparesOrdenados(arr) {
    return ordenar(arr.filter(n => n % 2 !== 0));
}

function imparesDosCifras(arr) {
    return arr.filter(n => n % 2 !== 0 && Math.abs(n) >= 10 && Math.abs(n) <= 99);
}

function frecuencia(arr) {
    let ordenado = ordenar(arr);
    let resultado = [];

    if (ordenado.length === 0) {
        return resultado;
    }

    let actual = ordenado[0];
    let veces = 0;

    for (let i = 0; i < ordenado.length; i++) {
        if (ordenado[i] === actual) {
            veces++;
        } else {
            resultado.push([actual, veces]);
            actual = ordenado[i];
            veces = 1;
        }
    }
    resultado.push([actual, veces]);
    return resultado;
}

console.log("Original:", arr);
console.log("Ordenado:", ordenar(arr));
console.log("Impares ordenados:", imparesOrdenados(arr));
console.log("Impares de dos cifras:", imparesDosCifras(arr));
console.log("Frecuencia:", frecuencia(arr));
console.log("El original sigue igual:", arr);
