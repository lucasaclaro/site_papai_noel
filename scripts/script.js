const nome = document.querySelector('#inome')
const idade = document.querySelector('#idade')
const presente = document.querySelector('#ipresente')
const formulario = document.querySelector('.formulario')
const papelDeParede = document.querySelector('.dados-inserir')

function gerarCarta() {
    formulario.style.display = 'none'
    papelDeParede.style.background-image.url('../imagens/papel.jpg')

}