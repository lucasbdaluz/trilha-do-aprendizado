/* Funções sem retorno */
function somar(n1, n2){
    var r
    r = n1 + n2
    alert("Funções de soma sem retorno, resultado " + r)
}

/* Funções com retorno */
function subtrair(n1, n2){
    var r
    r = n1 - n2
    return(r)
}

somar(10, 35)
var resultado
resultado = subtrair(35, 10)
alert("Função subtrair com retorno, resultado " + resultado)