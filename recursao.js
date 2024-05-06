// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  soma = 0;
  for(i = 0; i <= n;i++){
    soma += i
  }
    return soma; 

}

// Verifica se um número é par
function ehPar(number) {
  if(number %2 ===0){
    number = true;
  } else {
    number = false;
  }
  return number;
}

function fibonacci(n) {
  if (n <2){
    return n
  } else{
    return fibonacci(n-1)+fibonacci(n-2);

  }
}

module.exports = { somaNumeros, ehPar, fibonacci };