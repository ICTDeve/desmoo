DROP TABLE IF EXISTS comentarios_discussao;
CREATE TABLE IF NOT EXISTS comentarios_discussao (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_publicacao INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    
    conteudo VARCHAR(2000) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_publicacao) REFERENCES publicacoes (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

INSERT INTO comentarios_discussao (id_publicacao, id_usuario, conteudo) 
VALUES 	(2, 2, "Que discussão interessante!"),
		(2, 1, "Não sei bem o que pensar sobre isso"),
        (2, 3, "De acordo com um artigo publicado pela universidade de Harvard, ...");

SELECT P.id as id_publicacao, U.id as id_usuario, U.caminho_foto_perfil, U.nome_completo, CS.conteudo FROM comentarios_discussao CS
INNER JOIN publicacoes P
ON CS.id_publicacao = P.id AND P.id = 2
INNER JOIN usuarios U
ON CS.id_usuario = U.id;