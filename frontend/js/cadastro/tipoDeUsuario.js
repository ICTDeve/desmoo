// formulário da página "tipo de categoria"
const formTipoDeCategoria = document.getElementById('formTipoDeCategoria')

// referente aos cards propriamente ditos
const cardsTipoDeCategoria = document.querySelectorAll('.card-tipo-de-categoria')

cardsTipoDeCategoria.forEach(card => {
    card.addEventListener('click', () => {
        formTipoDeCategoria.submit()
    })
})