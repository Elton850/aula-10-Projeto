// Atividade 04
// Crie uma função que calcula o Índice de Massa Corporal (IMC) e
// retorna se a pessoa está abaixo do peso, no peso ideal ou acima do
// peso.

const peso = Number(prompt("Qual seu peso atual?"))
const altura = Number(prompt("Qual sua altura?"))

function calcularIMC(peso,altura){
    const IMC = peso/(altura**2)
    if(IMC < 18.49){
        alert("Abaixo do peso")
    } else if(IMC > 18.49 && IMC < 24.99){
        alert("Peso ideal(Saudável)")
    } else {
        alert("Acima do peso")
    }
}

calcularIMC(peso.toFixed(2),altura.toFixed(2))