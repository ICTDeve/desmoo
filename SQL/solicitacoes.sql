DROP TABLE IF EXISTS solicitacoes;
CREATE TABLE IF NOT EXISTS solicitacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,

    data VARCHAR(10) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    UNIQUE KEY (id_usuario)
);


INSERT INTO solicitacoes (id_usuario, data) 
VALUES 	(2, "15/08/2021"),
		(1, "10/10/2021"),
        (3, "25/09/2021");

SELECT U.id as id_usuario, U.caminho_foto_perfil, U.nome_completo, U.id_lattes, S.data FROM solicitacoes S
INNER JOIN usuarios U
ON S.id_usuario = U.id;