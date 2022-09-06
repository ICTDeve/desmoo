DROP TABLE IF EXISTS perguntas_pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS perguntas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_pesquisa INT UNSIGNED NOT NULL,

    numero_pergunta INT UNSIGNED NOT NULL,
    pergunta TINYTEXT NOT NULL,
    tipo ENUM("dissertativa", "resposta unica", "multipla escolha", "ranking") NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY (id, pergunta)
);