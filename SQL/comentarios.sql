DROP TABLE IF EXISTS comentarios;
CREATE TABLE IF NOT EXISTS comentarios (
    id INT UNSIGNED NOT NULL AUTO_iNCREMENT,
	id_usuario INT UNSIGNED NOT NULL,
    id_publicacao INT UNSIGNED NOT NULL,

    data VARCHAR(10) NOT NULL,
    hora VARCHAR(5) NOT NULL,

    conteudo VARCHAR(2000) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    FOREIGN KEY (id_publicacao) REFERENCES publicacoes (id_publicacao)
);

INSERT INTO comentarios (id_usuario, id_publicacao, data, hora, conteudo) 
VALUES 	('2', '1', '10/10/2022', '10:45', 'Que legal!'),
		('1', '1', '10/11/2022', '08:20', 'Realmente interessante!'),
        ('3', '2', '10/08/2022', '09:15', 'Uau!');

SELECT U.caminho_foto_perfil, U.nome_completo, C.conteudo as conteudo_comentario FROM comentarios C
INNER JOIN publicacoes P
ON C.id = P.id_publicacao
INNER JOIN usuarios U
ON C.id = U.id;