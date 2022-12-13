// desmoo/cadastro

const formulario = document.getElementById('formulario')

const botaoEnvio = document.getElementById('botaoEnvio')

const camposObrigatorios = document.querySelectorAll("[obrigatorio='true']")

const campoNomeCompleto = document.getElementById('nomeCompleto')
const campoEmail = document.getElementById('email')
const campoCpf = document.getElementById('cpf')
const campoSenha = document.getElementById('senha')
const campoRepeticaoSenha = document.getElementById('repeticaoSenha')
const confirmacaoTermos = document.getElementById('confirmacaoTermos')

const { ValidacaoCpf } = require('./validacaoCpf');

class Validacao {
    constructor(formulario, botaoEnvio, camposObrigatorios, campoNomeCompleto, campoEmail, campoCpf, campoSenha, campoRepeticaoSenha, confirmacaoTermos) {
        this.formulario = formulario

        this.botaoEnvio = botaoEnvio

        this.camposObrigatorios = camposObrigatorios

        this.campoNomeCompleto = campoNomeCompleto
        this.campoEmail = campoEmail
        this.campoCpf = campoCpf
        this.campoSenha = campoSenha
        this.campoRepeticaoSenha = campoRepeticaoSenha

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
        let obrigatoriosEstaoPreenchidos = true 

        this.camposObrigatorios.forEach(campo => {
            if (campo.value.length == 0) {
                obrigatoriosEstaoPreenchidos = false
                this.dispararErro(campo, '* Campo não pode estar em branco.')
            }
        })
        
        return obrigatoriosEstaoPreenchidos
    }

    validacaoSenha() {
        let senhaValida = false

        const caracteresEspeciais = []
        const numeros = []
        const maiusculas = []
       
        const senha = this.campoSenha.value.trim()

        console.log(senha)

        for (const caractere of senha) {
            const codigoCaractere = caractere.charCodeAt(0)

            if ((codigoCaractere >= 33 && codigoCaractere <= 47) || (codigoCaractere >= 58 && codigoCaractere <= 64) || (codigoCaractere >= 91 && codigoCaractere <= 96) || (codigoCaractere >= 123 && codigoCaractere <= 126) || (codigoCaractere >= 192 && codigoCaractere <= 197)) {
                // caracteres especiais
                caracteresEspeciais.push(caractere)
            } 
            else if (codigoCaractere >= 48 && codigoCaractere <= 57) {
                // numeros
                numeros.push(caractere)
            }
            else if ((codigoCaractere >= 65 && codigoCaractere <= 90) || (codigoCaractere == 128) || (codigoCaractere >= 142 && codigoCaractere <= 144) || (codigoCaractere >= 153 && codigoCaractere <= 154) || codigoCaractere == 165 || (codigoCaractere >= 181 && codigoCaractere <= 183) || codigoCaractere == 199 || (codigoCaractere >= 209 && codigoCaractere <= 212) || (codigoCaractere >= 224 && codigoCaractere <= 229) || (codigoCaractere >= 233 && codigoCaractere <= 237)) {
                // maiúsculas
                maiusculas.push(caractere)
            }
        }

        if (numeros.length >= 2) {
            senhaValida = true
        } else {
            if (numeros.length < 2) {
                this.dispararErro(this.campoSenha, '* Insira ao menos dois números.')
            } 
        }

        return senhaValida
    }

    validacaoEmail() {
        let EmailValido = false

        // verificando se há a presença de @ + provedor + .com. Se sim, irá retornar um array com duas posições
        const gmail = this.campoEmail.value.split('@gmail.com')
        const hotmail = this.campoEmail.value.split('@hotmail.com')
        const yahoo = this.campoEmail.value.split('@yahoo.com')


        if (gmail.length == 2 || hotmail.length == 2 || yahoo.length == 2) {
            EmailValido = true
        } else {
            this.dispararErro(this.campoEmail, '* Verifique se preencheu o campo corretamente.')
        }

        return EmailValido
    }

    validacaoCPF() {
        let cpfValido = false

        const cpf = new ValidacaoCpf(this.campoCpf.value)

        cpf.validar()

        if (cpf.eValido) {
            cpfValido = true
        }
        else {
            this.dispararErro(this.campoCpf, '* CPF inválido.')
        }

        return cpfValido
    }

    dispararErro(campo, mensagem) {
        const mensagemErro = document.createElement('div')
        mensagemErro.innerHTML = mensagem
        mensagemErro.classList.add('mensagem-de-erro')
        campo.insertAdjacentElement('beforeBegin', mensagemErro)
    }

    // função responsável por remover todas as mensagens de erro
    removerErros() {
        const mensagensDeErro = document.querySelectorAll('.mensagem-de-erro')

        mensagensDeErro.forEach(mensagemDeErro => mensagemDeErro.remove())
    }

    termoPreenchido() {
        let termoPreenchido = this.confirmacaoTermos.checked

        if (!termoPreenchido) this.dispararErro(this.confirmacaoTermos, '* !')

        return termoPreenchido
    }

    senhasSaoIguais() {
        let senhasSaoIguais = false

        if (this.campoSenha.value == this.campoRepeticaoSenha.value) {
            senhasSaoIguais = true
        } else {
            this.dispararErro(this.campoRepeticaoSenha, '* Senhas devem ser idênticas!')
        }

        return senhasSaoIguais
    }

    jaCadastrado() {
        let jaCadastrado = false

        this.camposObrigatorios.forEach(campoObrigatorio => {
            if (campoObrigatorio.classList.contains('ja-cadastrado')) {
                jaCadastrado = true

                this.dispararErro(campoObrigatorio, '* Já cadastrado!')
            }
        })

        return jaCadastrado
    }

    formatarCpf() {
        let cpf = this.campoCpf.value

        if (this.campoCpf.value.length == 3) {
            cpf = this.campoCpf.value
            this.campoCpf.value = `${cpf}.`
        }

        if (this.campoCpf.value.length == 7) {
            cpf = this.campoCpf.value
            this.campoCpf.value = `${cpf}.`
        }

        if (this.campoCpf.value.length == 11) {
            cpf = this.campoCpf.value
            this.campoCpf.value = `${cpf}-`
        }
    }

    start() {
        this.botaoEnvio.addEventListener('click', evento => {
            evento.preventDefault()

            this.removerErros()
            
            const obrigatoriosEstaoPreenchidos = this.obrigatoriosEstaoPreenchidos()
            const emailValido = this.validacaoEmail()
            const cpfValido = this.validacaoCPF()
            const senhaValida = this.validacaoSenha()
            const senhasSaoIguais = this.senhasSaoIguais()
            const termoPreenchido = this.termoPreenchido()
            const jaCadastrado = this.jaCadastrado()

            if (obrigatoriosEstaoPreenchidos && emailValido && cpfValido && senhaValida && senhasSaoIguais && termoPreenchido && !jaCadastrado) {
                this.formulario.submit()
            }
        })

        this.campoCpf.addEventListener('keyup', () => {
            this.formatarCpf()
        })
    }
}

const v1 = new Validacao(formulario, botaoEnvio, camposObrigatorios, campoNomeCompleto, campoEmail, campoCpf, campoSenha, campoRepeticaoSenha, confirmacaoTermos)
v1.start()