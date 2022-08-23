DROP TABLE IF EXISTS respostas_pesquisas_de_campo;

CREATE TABLE IF NOT EXISTS respostas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_pergunta INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    resposta VARCHAR(800) NOT NULL,

    -- UNIQUE KEY (id_usuario),
    PRIMARY KEY (id),
    FOREIGN KEY (id_pergunta)
    FOREIGN KEY (id_usuario)
);