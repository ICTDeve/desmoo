DROP TABLE IF EXISTS pastas;
DROP TABLE IF NOT EXISTS pastas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,

    nome VARCHAR(40) NO NULL,

    PRIMARY KEY (id)
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    UNIQUE KEY (id_usuario, nome)
);