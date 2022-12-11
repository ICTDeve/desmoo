const botoes = document.querySelectorAll('button')
botoes.forEach(botao => {
    botao.addEventListener('click', e => {
        e.preventDefault()

        const id = botao.getAttribute('id-usuario')
        console.log(id)
        let situacao = botao.innerText.toLowerCase()

        situacao = situacao == "aceitar" ? "aceito" : "recusado"

        preencherInput(id, situacao)
        enviarForms(id)
    })
})

function preencherInput(id, situacao) {
    const input = document.querySelector(`input[id-usuario='${id}']`)
    input.setAttribute('value', situacao)
}

function enviarForms(id) {
    document.querySelector(`form[id-usuario='${id}']`).submit()
}