DROP TABLE IF NOT EXISTS especializacoes_usuarios;

CREATE TABLE IF NOT EXISTS especializacoes_usuarios (
    id_especializacao INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    PRIMARY KEY (id_especializacao, id_usuario)
    FOREIGN KEY (id_especializacao) REFERENCES especializacoes (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    UNIQUE KEY  (id_especializacao, id_usuario),
);