DROP TABLE IF EXISTS comentarios;

CREATE TABLE IF NOT EXISTS comentarios (
    id INT UNSIGNED NOT NULL AUTO_iNCREMENT,
	id_usuario VARCHAR(50) NOT NULL,

    id_publicacao INT UNSIGNED NOT NULL

    data_publicacao VARCHAR(10) NOT NULL;

    FOREIGN KEY (id_publicacao) REFERENCES publicacoes;
    FOREIGN KEY (id_usuario) REFERENCES usuarios;
);

DROP TABLE IF EXISTS perguntas_pesquisas_de_campo;

CREATE TABLE IF NOT EXISTS perguntas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_pesquisa INT UNSIGNED NOT NULL,
    id_autor INT UNSIGNED NOT NULL,

    conteudo TINYTEXT NOT NULL,

    data_inicio VARCHAR(10) NOT NULL,
    data_fim VARCHAR(10) NOT NULL,
);