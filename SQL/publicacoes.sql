CREATE TABLE IF NOT EXISTS publicacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_autor INT UNSIGNED NOT NULL,

    titulo VARCHAR(300) NOT NULL,
    conteudo MEDIUMTEXT NOT NULL,

    data_inicio VARCHAR(10) NOT NULL,
    data_fim VARCHAR(10) NOT NULL

    UNIQUE KEY (id_autor, titulo),
    PRIMARY KEY (id),
    FOREIGN KEY (id_autor),
);