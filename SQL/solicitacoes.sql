DROP TABLE IF EXISTS solicitacoes;
CREATE TABLE IF NOT EXISTS solicitacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    UNIQUE KEY (id_usuario)
);