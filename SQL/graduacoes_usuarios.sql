DROP TABLE IF NOT EXISTS graduacoes_usuarios;

CREATE TABLE IF NOT EXISTS graduacoes_usuarios (
    id_graduacao INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    PRIMARY KEY (id_graduacao, id_usuario)
    FOREIGN KEY (id_graduacao) REFERENCES graduacoes (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    UNIQUE KEY  (id_graduacao, id_usuario),
);