CREATE TABLE IF NOT EXISTS comentarios_discussoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_publicacao INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    comentario VARCHAR(1000) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_publicacao) REFERENCES publicacoes (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);