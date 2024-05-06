// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    const numerosDobrados = numeros.map((numero)=> numero*2)
    return numerosDobrados
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    return numeros.reduce((somaTotal, valorAtual)=> somaTotal +valorAtual,0);
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    const numerosPares = numeros.filter((numero)=> numero %2 ==0);
    return numerosPares;
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};