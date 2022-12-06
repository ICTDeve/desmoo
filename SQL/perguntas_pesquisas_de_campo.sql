DROP TABLE IF EXISTS perguntas_pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS perguntas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_pesquisa INT UNSIGNED NOT NULL,

    -- numero_pergunta INT UNSIGNED NOT NULL,
    pergunta TINYTEXT NOT NULL,
<<<<<<< Updated upstream
    tipo ENUM("dissertativa", "resposta unica", "multipla_escolha", "ranking") NOT NULL,
=======
    categoria ENUM("dissertativa", "resposta unica", "multipla escolha") NOT NULL,
>>>>>>> Stashed changes

    PRIMARY KEY (id),
    FOREIGN KEY(id_pesquisa) REFERENCES respostas_pesquisas_de_campo (id)
    UNIQUE KEY (id, pergunta),
);