DROP TABLE IF EXISTS graduacoes_usuarios;
CREATE TABLE IF NOT EXISTS graduacoes_usuarios (
    id_graduacao INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    PRIMARY KEY (id_graduacao, id_usuario),
    FOREIGN KEY (id_graduacao) REFERENCES graduacoes (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    UNIQUE KEY  (id_graduacao, id_usuario)
);

INSERT INTO graduacoes_usuarios
	(id_graduacao, id_usuario)
VALUES
	(1, 1),
    (2, 1),
    
    (1, 2),
    (2, 2),
    (3, 2);
    
SELECT * FROM graduacoes_usuarios;

SELECT g.nome FROM usuarios u 
JOIN graduacoes_usuarios gu
ON gu.id_usuario = 2 AND u.id = 2
JOIN graduacoes g
ON g.id = gu.id_graduacao;