/* Elabore um programa que solicite ao usuarios dois numeros
n1 e n2. Realize a subtração dos dois valores. O programa
não deve exibir numero negativo */
var n1, n2, subtracao
n1 = parseInt(prompt("Entre com um valor: "))
n2 = parseInt(prompt("Entre com outro valor: "))

if(n1>n2){
    subtracao = n1 + n2
    alert("O resultado é " + subtracao)
}else{
    subtracao = n2 - n1
    alert("O resultado é " + subtracao)
}