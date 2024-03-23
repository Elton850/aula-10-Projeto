const botaoAdicionar = document.querySelector('#botao_adicionar')
const formulario = document.querySelector('#formulario')

function adicionarTarefa(event){
    event.preventDefault()

    const novaDiv = document.createElement('div')

    const novaCheckbox = document.createElement('input')
    novaCheckbox.type = 'checkbox'
    
    const novaCaixaTexto = document.createElement('input')
    novaCaixaTexto.type = 'text'
    novaCaixaTexto.classList.add('form_lista')

    const novoBotaoRemover = document.createElement('button')
    novoBotaoRemover.innerHTML = `<i class="fa-solid fa-xmark"></i>`

    //Adiciona o input criado a div contendo os elementos do formulario
    novaDiv.appendChild(novaCheckbox)
    novaDiv.appendChild(novaCaixaTexto)
    novaDiv.appendChild(novoBotaoRemover)

    novaDiv.classList.add('form_elementos')

    formulario.insertBefore(novaDiv,botaoAdicionar)
}

botaoAdicionar.addEventListener('click',adicionarTarefa)