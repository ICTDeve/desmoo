DROP TABLE IF EXISTS graduacoes;
CREATE TABLE IF NOT EXISTS graduacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,

    PRIMARY KEY (id)
);

INSERT INTO graduacoes
	(nome)
VALUES
	('Medicina'),
    ('Odontologia'),
    ('Nutrição');