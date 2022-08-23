DROP TABLE IF EXISTS curtidas;

CREATE TABLE IF NOT EXISTS curtidas (
    id INT UNSIGNED NOT NULL AUTO_iNCREMENT,
    id_usuario VARCHAR(50) NOT NULL,

    id_publicacao INT UNSIGNED NOT NULL

    data_publicacao VARCHAR(10) NOT NULL;

    FOREIGN KEY (id_publicacao) REFERENCES publicacoes;
    FOREIGN KEY (id_usuario) REFERENCES usuarios;

);