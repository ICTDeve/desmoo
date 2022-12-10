const alternarComentarios = document.querySelectorAll('.publicacao [id-publicacao]')

function alternarVisibilidadeDosComentarios(idPublicacao) {
    const comentarios = document.querySelector(`.publicacao[id-publicacao="${idPublicacao}"] .publicacao__comentarios`)
    
    if (comentarios.classList.contains('ativados')) {
        comentarios.classList.remove('ativados')
    } else {
        comentarios.classList.add('ativados')
    }
}

alternarComentarios.forEach(alternar => {
    alternar.addEventListener('click', () => {
        alternarVisibilidadeDosComentarios(alternar.getAttribute('id-publicacao'))
    })
})