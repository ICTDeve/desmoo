const abrirPopUp = document.getElementById('abrirPopUp')
const fecharPopUp = document.getElementById('fecharPopUp')
const popUp = document.getElementById('main')

const iconAberto = document.getElementById('iconAberto')
const iconFechado = document.getElementById('iconFechado')

abrirPopUp.addEventListener('click', () => {
    popUp.classList.toggle('ativo')
    iconFechado.classList.toggle('ativo')
    iconAberto.classList.toggle('ativo')

})

fecharPopUp.addEventListener('click', () => {
    popUp.classList.remove('ativo')
    iconFechado.classList.toggle('ativo')
    iconAberto.classList.toggle('ativo')
})