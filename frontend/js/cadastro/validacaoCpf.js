// 705.484.450-52
// 070.987.720-03

const _eValido = Symbol('validateStatus')

class ValidacaoCpf {
    constructor (cpfRecebido) {
        this[_eValido] = false
        this.cpfRecebido = cpfRecebido
        Object.defineProperty(this, 'cpfLimpo', {
            configurable: false,
            enumerable: true,
            writable: false,
            value: cpfRecebido.replace(/\D+/g, ''),
            // nodemailer
        })
    }

    estaNaSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) == this.cpfLimpo
    }

    gerarNovoCpf() {
         const cpfIncompleto = this.cpfLimpo.slice(0, -2)
         const digito1 = ValidacaoCpf.gerarDigito(cpfIncompleto)
         const digito2 = ValidacaoCpf.gerarDigito(cpfIncompleto + digito1)

         return cpfIncompleto + digito1 + digito2 
    }
        
    static gerarDigito(cpfIncompleto) {
            let digito
            let total = 0
            let contadorReverso = cpfIncompleto.length + 1
            
            for (let caractere of cpfIncompleto) {
                total += contadorReverso * Number(caractere)
                contadorReverso--
            }

            digito = 11 - (total % 11)

            return digito <= 9 ? String(digito) : '0'
    }

    validar() {
        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== 'string') return false 
        if (this.cpfLimpo.length !== 11) return false
        if (this.estaNaSequencia()) return false
        if (this.gerarNovoCpf() !== this.cpfLimpo) return false

        this[_eValido] = true

        return true
    }

    get eValido() {
        return this[_eValido]
    }
}

exports.ValidacaoCpf = ValidacaoCpf;