// Atividade 02
// Crie um formulário com um campo de texto e um botão. Ao clicar no
// botão, adicione um novo elemento à página com o texto digitado no
// campo de texto.

const texto = document.querySelector('#texto')
const botao = document.querySelector('#botao')
const lista = document.querySelector('#lista')

function publicar(event){
    event.preventDefault()
    const novoItem = document.createElement('li')
    novoItem.textContent = texto.value
    lista.appendChild(novoItem)
    texto.value = ""
}

botao.addEventListener('click',publicar)