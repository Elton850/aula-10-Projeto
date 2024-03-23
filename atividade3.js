// Atividade 03
// Crie uma função que recebe um array de números e retorna a soma deles.

const arrayNumeros = [1, 2, 3, 4, 5]
let resultado = 0

function somar(array){
    for(numero of arrayNumeros){
        resultado += numero
    }
    return resultado
}

console.log(somar(arrayNumeros))