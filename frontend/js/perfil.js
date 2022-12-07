const listaSobreEPublicacoes = document.getElementById('listaSobreEPublicacoes')
const blocoSobre = document.getElementById('sobre')
const blocopublicacoes = document.getElementById('publicacoes')

blocoSobre.addEventListener('click', alternar)
blocopublicacoes.addEventListener('click', alternar)

function alternar() {
    if (listaSobreEPublicacoes.getAttribute('ativo') == 1) {
        listaSobreEPublicacoes.setAttribute('ativo', 2)
    } else {
        listaSobreEPublicacoes.setAttribute('ativo', 1)
    }
}