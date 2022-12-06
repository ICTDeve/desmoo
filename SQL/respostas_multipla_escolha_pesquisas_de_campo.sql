<<<<<<< Updated upstream
DROP TABLE IF EXISTS respostas_unicas_pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS respostas_unicas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT;
=======
DROP TABLE IF EXISTS respostas_pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS respostas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
>>>>>>> Stashed changes
    id_pergunta INT UNSIGNED NOT NULL,
    id_pesquisa_de_campo INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    conteudo VARCHAR(70) NOT NULL,
    
    PRIMARY KEY (id),
    PRIMARY KEY (id_pergunta) REFERENCES perguntas_pesquisas_de_campo (id),
    PRIMARY KEY (id_pesquisa_de_campo) REFERENCES pesquisas_de_campo (id),
    PRIMARY KEY (id_usuario) REFERENCES usuarios (id),
);