DROP TABLE IF EXISTS pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_autor INT UNSIGNED NOT NULL,

    titulo VARCHAR(300) NOT NULL,
    descricao TINYTEXT NOT NULL,

    data_inicio VARCHAR(10) NOT NULL,
    data_fim VARCHAR(10) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_autor) REFERENCES usuarios (id),
    UNIQUE KEY (id, titulo)
);