// Converte uma string para um número inteiro
function convertToInt(string) {
    return parseInt(string);
}

// Converte um número inteiro para uma string
function convertToString(number) {
    let resultado
    resultado = number.toString();
    return resultado;
}

// Converte um valor para um booleano
function convertToBoolean(value) {
    if(value === 0){
        value = false;
    } else{
        value = true;
    }
    return value;
}

module.exports = { convertToInt, convertToString, convertToBoolean };