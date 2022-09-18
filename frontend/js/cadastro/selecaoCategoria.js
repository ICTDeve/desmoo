// formulário da página "tipo de categoria"
const formTipoDeCategoria = document.getElementById('formTipoDeCategoria')

// referente aos cards propriamente ditos
const cardsTipoDeCategoria = document.querySelectorAll('label')

cardsTipoDeCategoria.forEach(card => {
    card.addEventListener('click', () => {
        setTimeout(() => {
            formTipoDeCategoria.submit()
        }, 100)
    })
})