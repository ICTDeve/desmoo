DROP TABLE IF EXISTS curtidas;
CREATE TABLE IF NOT EXISTS curtidas (
    id INT UNSIGNED NOT NULL AUTO_iNCREMENT,
    id_publicacao INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    data VARCHAR(10) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_publicacao) REFERENCES publicacoes (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

INSERT INTO curtidas (id_usuario, id_publicacao, data) 
VALUES 	('1', '2', '10/10/2022'),
		('3', '2', '10/11/2022'),
        ('3', '2', '10/08/2022');