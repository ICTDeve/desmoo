DROP TABLE IF EXISTS notificacoes;
CREATE TABLE IF NOT EXISTS notificacoes (
    id INT UNSIGNED NOT NULL AUTO_iNCREMENT,

    id_destinatario INT UNSIGNED NOT NULL,
    id_remetente INT UNSIGNED NOT NULL,
    id_publicacao INT UNSIGNED NOT NULL,

    categoria ENUM("comentario", "curtida") NOT NULL,

    data VARCHAR(10) NOT NULL,
    hora VARCHAR(8) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_publicacao) REFERENCES publicacoes (id),
    FOREIGN KEY (id_destinatario) REFERENCES usuarios (id),
    FOREIGN KEY (id_remetente) REFERENCES usuarios (id)
);

INSERT INTO notificacoes (id_destinatario, id_remetente, id_publicacao, data, hora, categoria) 
VALUES 	('2', '3', '1', '10/10/2022', "10:25", "curtida"),
		('2', '1', '3', '10/11/2022', "08:40", "comentario"),
        ('1', '2', '3', '10/08/2022', "12:15", "curtida");
        
SELECT * FROM notificacoes;

SELECT U.caminho_foto_perfil, U.nome_completo as nome_destinatario, U.nome_completo as nome_remetente, N.categoria FROM notificacoes N
INNER JOIN usuarios U
ON N.id_remetente = U.id AND N.id_destinatario = 1;