// Atividade 01
// Crie um formulário com campos de nome, email e senha. Adicione um
// evento de submit ao formulário que valida se todos os campos foram
// preenchidos. Se não, exiba uma mensagem de erro.

const formulario = document.querySelector('#formulario') 
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const mensagem = document.querySelector('#mensagem')

function validarCampos(){

    let validado = false

    if(nome.value === "" || email.value === "" || senha.value === "" ){
        validado = false
    } else {
        validado = true
    }
    return validado
}

formulario.addEventListener('submit', (event) => {
    if(!validarCampos()){
        mensagem.textContent = "Existem campos vazios, favor verificar!"
        event.preventDefault()
    }
})