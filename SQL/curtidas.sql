DROP TABLE IF EXISTS curtidas;

CREATE TABLE IF NOT EXISTS curtidas (
    id INT UNSIGNED NOT NULL AUTO_iNCREMENT,
    id_publicacao INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    data VARCHAR(10) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_publicacao) REFERENCES publicacoes (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)

);