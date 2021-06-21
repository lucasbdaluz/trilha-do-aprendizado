/* Permita ao usuarios inserir um valor que exiba a tabuada */
var t, n, cont = 0, op
n = parseInt(prompt("Entre com o valor da tabuada"))
op = parseInt(prompt("Escolha 1 para while ou 2 para for"))

switch(op){
    case 1: {
        while(cont<11){
            t = n * cont
            document.write("<h2>" + t + "</h2>")
            cont++
        }
        break
    }
    case 2: {
        for(cont=0; cont<11; cont++){
            t = n * cont
            document.write("<h2>" + t + "</h2>")
        }
        break
    }
    default: {
        alert("Opção invalida")
        break
    }
}



