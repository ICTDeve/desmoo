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
    ("Angiologia", SELECT)
    ("Dermatologia", SELECT)
    ("Alergologia e Imunologia Clínica", SELECT)
    ("Cancerologia", SELECT)
    ("Hematologia", SELECT)
    ("Endocrinologia", SELECT)
    ("Neurologia", SELECT)
    ("Pediatria", SELECT)
    ("Doenças Infecciosas e Parasitárias", SELECT)
    ("Cardiologia", SELECT)
    ("Gastroenterologia", SELECT)
    ("Pneumologia", SELECT)
    ("Nefrologia", SELECT)
    ("Reumatologia", SELECT)
    ("Ginecologia e Obstetrícia", SELECT)
    ("Fisiatria", SELECT)
    ("Oftalmologia", SELECT)
    ("Ortopedia", SELECT);
