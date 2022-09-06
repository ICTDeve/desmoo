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
    ("Medicina"),
    ("Odontologia"),
    ("Farmácia"),
    ("Enfermagem"),
    ("Nutrição"),
    ("Saúde Coletiva"),
    ("Fonoaudiologia"),
    ("Fisioterapia e Terapia Ocupacional"),
    ("Educação Física");

-- http://lattes.cnpq.br/web/dgp/ciencias-da-saude