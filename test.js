class Usuario {
    constructor(idPersonalizavel, idLattes, nomeCompleto, email, cpf, senha, dataCadastro, categoria, seguidores, seguindo, pontos, advertencias) {
        this.idPersonalizavel = idPersonalizavel
        this.idLattes = idLattes
        this.nomeCompleto = nomeCompleto
        this.email = email
        this.cpf = cpf
        this.senha = senha
        this.dataCadastro = dataCadastro
        this.categoria = categoria
        this.seguidores = seguidores
        this.seguindo = seguindo
        this.pontos = pontos
        this.advertencias = advertencias
    }
}

const usuario = new Usuario();

usuario.categoria = 'qualificado'

