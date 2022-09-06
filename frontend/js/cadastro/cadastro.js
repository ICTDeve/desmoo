// desmoo/cadastro

const formulario = document.getElementById('formulario')

const botaoEnvio = document.getElementById('botaoEnvio')

const entradasObrigatorias = document.querySelectorAll("[obrigatorio='true']")

const entradaNomeCompleto = document.getElementById('nomeCompleto')
const entradaEmail = document.getElementById('email')
const entradaCpf = document.getElementById('cpf')
const entradaSenha = document.getElementById('senha')
const entradaRepeticaoSenha = document.getElementById('repeticaoSenha')
const confirmacaoTermos = document.getElementById('confirmacaoTermos')

class Validacao {
    constructor(formulario, botaoEnvio, entradasObrigatorias, entradaNomeCompleto, entradaEmail, entradaCpf, entradaSenha, entradaRepeticaoSenha, confirmacaoTermos) {
        this.formulario = formulario

        this.botaoEnvio = botaoEnvio

        this.entradasObrigatorias = entradasObrigatorias

        this.entradaNomeCompleto = entradaNomeCompleto
        this.entradaEmail = entradaEmail
        this.entradaCpf = entradaCpf
        this.entradaSenha = entradaSenha
        this.entradaRepeticaoSenha = entradaRepeticaoSenha

        this.confirmacaoTermos = confirmacaoTermos
    }

    cancelarEnvio() {
        this.botaoEnvio.addEventListener('click', evento => {
            evento.preventDefault()
        })
    }

    permitirEnvio() {
        this.botaoEnvio.addEventListener('click', () => {
            formulario.submit()
        })
    }

    obrigatoriosEstaoPreenchidos() {
        let estaoPreenchidos = true 

        // this.entradasObrigatorias.forEach
        
        return estaoPreenchidos
    }

    start() {
        this.botaoEnvio.addEventListener('click', () => {
            // fazer todas as verificações, que irão retornar uma flag. Se todas as flags estiverem positivas, permitir acesso, caso contrário, contrário
        })
    }
}

const v1 = new Validacao(formulario, botaoEnvio, entradasObrigatorias, entradaNomeCompleto, entradaEmail, entradaCpf, entradaSenha, entradaRepeticaoSenha, confirmacaoTermos)
v1.start()