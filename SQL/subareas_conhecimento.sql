DROP TABLE IF EXISTS subareas_conhecimento;
CREATE TABLE IF NOT EXISTS subareas_conhecimento (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_area_conhecimento INT UNSIGNED NOT NULL,
    nome VARCHAR(30) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_area_conhecimento) REFERENCES areas_conhecimento (id),
    UNIQUE KEY (nome)
);

INSERT INTO subareas_conhecimento
    (nome, id_area_conhecimento) 
VALUES
    ("Angiologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Dermatologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Alergologia e Imunologia Clínica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cancerologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Hematologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Endocrinologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Neurologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Pediatria", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Doenças Infecciosas e Parasitárias", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cardiologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Gastroenterologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Pneumologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Nefrologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Reumatologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Ginecologia e Obstetrícia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Fisiatria", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Oftalmologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Ortopedia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),

    ("Cirurgia Plástica e Restauradora", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Otorrinolaringológica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Oftalmológica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Cardiovascular", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Toráxica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Gastroenterologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Pediátrica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Neurocirurgia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Urológica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Proctológica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Ortopédica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Traumatológica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Anestesiologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Cirurgia Experimental", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),

    ("Saúde Materno-Infantil", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Psiquiatria", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Anatomia Patológica e Patologia Clínica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Radiologia Médica", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),
    ("Medicina Legal e Deontologia", (SELECT id FROM areas_conhecimento WHERE nome = "Medicina")),

    ("Clínica Odontológica", (SELECT id FROM areas_conhecimento WHERE nome = "Odontologia")),
    ("Cirurgia Buco-Maxilo-Facial", (SELECT id FROM areas_conhecimento WHERE nome = "Odontologia")),
    ("Ortodontia", (SELECT id FROM areas_conhecimento WHERE nome = "Odontologia")),
    ("Odontopediatria", (SELECT id FROM areas_conhecimento WHERE nome = "Odontologia")),
    ("Periodontia", (SELECT id FROM areas_conhecimento WHERE nome = "Odontologia")),
    ("Endodontia", (SELECT id FROM areas_conhecimento WHERE nome = "Odontologia")),
    ("Radiologia Odontológica", (SELECT id FROM areas_conhecimento WHERE nome = "Odontologia")),
    ("Odontologia Social e Preventiva", (SELECT id FROM areas_conhecimento WHERE nome = "Odontologia")),
    ("Materiais Odontológicos", (SELECT id FROM areas_conhecimento WHERE nome = "Odontologia")),

    ("Farmacotecnia", (SELECT id FROM areas_conhecimento WHERE nome = "Farmácia")),
    ("Farmacognosia", (SELECT id FROM areas_conhecimento WHERE nome = "Farmácia")),
    ("Análise Toxicológica", (SELECT id FROM areas_conhecimento WHERE nome = "Farmácia")),
    ("Análise e Controle e Medicamentos", (SELECT id FROM areas_conhecimento WHERE nome = "Farmácia")),
    ("Bromatologia", (SELECT id FROM areas_conhecimento WHERE nome = "Farmácia")),

    ("Enfermagem Médico-Cirúrgica", (SELECT id FROM areas_conhecimento WHERE nome = "Enfermagem")),
    ("Enfermagem Obstétrica", (SELECT id FROM areas_conhecimento WHERE nome = "Enfermagem")),
    ("Enfermagem Pediátrica", (SELECT id FROM areas_conhecimento WHERE nome = "Enfermagem")),
    ("Enfermagem Psiquiátrica", (SELECT id FROM areas_conhecimento WHERE nome = "Enfermagem")),
    ("Enfermagem de Doenças Contagiosas", (SELECT id FROM areas_conhecimento WHERE nome = "Enfermagem")),
    ("Enfermagem de Saúde Pública", (SELECT id FROM areas_conhecimento WHERE nome = "Enfermagem")),

    ("Bioquímica da Nutrição", (SELECT id FROM areas_conhecimento WHERE nome = "Nutrição")),
    ("Dietética", (SELECT id FROM areas_conhecimento WHERE nome = "Nutrição")),
    ("Análise Nutricional de População", (SELECT id FROM areas_conhecimento WHERE nome = "Nutrição")),
    ("Desnutrição e Desenvolvimento Fisiológico", (SELECT id FROM areas_conhecimento WHERE nome = "Nutrição")),

    ("Epidemiologia", (SELECT id FROM areas_conhecimento WHERE nome = "Saúde Coletiva")),
    ("Saúde Pública", (SELECT id FROM areas_conhecimento WHERE nome = "Saúde Coletiva")),
    ("Medicina Preventiva", (SELECT id FROM areas_conhecimento WHERE nome = "Saúde Coletiva"));