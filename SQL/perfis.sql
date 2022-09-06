DROP TABLE IF EXISTS perfis;
CREATE TABLE IF NOT EXISTS perfis (
    id_usuario INT UNSIGNED NOT NULL,
    descricao TINYTEXT NOT NULL,

    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);