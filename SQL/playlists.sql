DROP TABLE IF EXISTS playlists;

DROP TABLE IF NOT EXISTS playlists (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,
    nome VARCHAR(40) NO NULL,

    UNIQUE KEY (id, id_usuario),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    PRIMARY KEY (id)
);