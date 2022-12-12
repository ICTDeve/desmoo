document.querySelectorAll('ul li').forEach(itemLista => {
    itemLista.addEventListener('click', () => {
        atualizarMenu(itemLista.getAttribute('id'))
    })
})

function atualizarMenu(id) {
    document.querySelector('main').setAttribute('atual', id)
}