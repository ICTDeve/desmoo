const campoLattes = document.getElementById('campoLattes')

class ValidacaoLattes extends ValidacaoGeral {
    constructor(campoLattes) {
        this.campoLattes = campoLattes
    }
}

const vL = new ValidacaoLattes(campoLattes)