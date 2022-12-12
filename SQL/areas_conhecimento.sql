DROP TABLE IF EXISTS areas_conhecimento;
CREATE TABLE IF NOT EXISTS areas_conhecimento (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY (nome)
);

INSERT INTO areas_conhecimento 
    (nome) 
VALUES
    ("medicina"),
    ("odontologia"),
    ("farmacia"),
    ("enfermagem"),
    ("nutricao"),
    ("saude-coletiva"),
    ("fonoaudiologia"),
    -- ("Fisioterapia e Terapia Ocupacional"),
    ("educacao-fisica");

-- http://lattes.cnpq.br/web/dgp/ciencias-da-saude