const alternarComentarios = document.querySelectorAll('.publicacao [alternar-visibiliadade-comentario]')

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

const alternarDescricao = document.querySelectorAll('.publicacao [alternar-visibiliadade-descricao]')

function alternarVisibilidadeDaDescricao(idPublicacao, alternar) {
    const descricao = document.querySelector(`.publicacao[id-publicacao="${idPublicacao}"] .publicacao__descricao__conteudo`)
    
    if (descricao.classList.contains('ativado')) {
        descricao.classList.remove('ativado')
        alternar.innerText = 'Ver mais...'
    } else {
        descricao.classList.add('ativado')
        alternar.innerText = 'Ver menos...'
    }
}

alternarDescricao.forEach(alternar => {
    alternar.addEventListener('click', () => {
        alternarVisibilidadeDaDescricao(alternar.getAttribute('id-publicacao'), alternar)
    })
})