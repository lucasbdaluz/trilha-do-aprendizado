var n1, n2, soma, frase
frase = "Exemplo de uma soma"
n1 = 9
n2 = 14.5
soma = n1 + n2
alert(frase)
alert(soma)
document.write("<h2>" + soma + "</h2>")

/*Somatorio com valores reais */
n1 = prompt("Entre com um valor: ")
n2 = prompt("Entre com outro valor: ")
soma = parseFloat(n1) + parseFloat(n2)
alert("O resultado da soma é " + soma)
document.write("<h2>" + soma + "</h2>")

/*Somatorio com valores inteiros */
n1 = prompt("Entre com um valor: ")
n2 = prompt("Entre com outro valor: ")
soma = parseInt(n1) + parseInt(n2)
alert("O resultado da soma é " + soma)
document.write("<h2>" + soma + "</h2>")