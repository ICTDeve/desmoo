DROP TABLE IS EXISTS areas_conhecimentos;

CREATE TABLE IF NOT EXISTS areas_conhecimentos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    UNIQUE KEY (nome),
    PRIMARY KEY (id)
);

INSERT INTO areas_conhecimentos 
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