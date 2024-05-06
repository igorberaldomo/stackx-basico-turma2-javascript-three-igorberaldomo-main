// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    let perimetro = 0;
    let area = 1;
    for (let i in retangulo) {
        perimetro += retangulo[i] * 2
        area *= retangulo[i];
    }
    return { "area": area, "perimetro": perimetro };
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    let ehMaior
    if (pessoa.idade >= 18) {
        ehMaior = true;
    } else {
        ehMaior = false;
    }
    return ehMaior;
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    return `${obj.nome} ${obj.idade} ${obj.cidade}`;
}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
