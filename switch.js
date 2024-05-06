// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    let dia = ""
    switch (number) {
        case 1: dia ='Domingo'; break;
        case 2: dia ='Segunda-feira'; break;
        case 3: dia ='Terça-feira'; break;
        case 4: dia ='Quarta-feira'; break;
        case 5: dia ='Quinta-feira'; break;
        case 6: dia ='Sexta-feira'; break;
        case 7: dia ='Sabado'; break;
        default: dia ='Número inválido'; break;
    }
    return dia;
}

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    switch(code){
    case 'A':
        return 10.99; break;
    case 'B':
        return 5.99; break;
    case 'C':
        return 7.5; break;
    default:
        return `Código inválido`
    }
}

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    switch(type){
        case 'Eletrônicos':
            return 'Tecnologia'; break;
        case 'Roupas':
            return 'Moda'; break;
        case 'Alimentos':
            return 'Alimentação'; break;
        default:
            return `Categoria desconhecida`
        }
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };