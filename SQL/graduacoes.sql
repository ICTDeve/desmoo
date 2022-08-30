DROP TABLE IF NOT EXISTS graduacoes;

CREATE TABLE IF EXISTS graduacoes (
    id INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    nome VARCHAR(50) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario)
);