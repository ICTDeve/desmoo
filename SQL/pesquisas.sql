-- CONTROLE DE PESQUISAS DOS USUÁRIOS

DROP TABLE IF EXISTS pesquisas;
CREATE TABLE IF NOT EXISTS pesquisas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,
    conteudo_pesquisa VARCHAR (100) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);