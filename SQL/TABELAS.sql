DROP DATABASE IF EXISTS desmoo;
CREATE DATABASE IF NOT EXISTS desmoo;
USE desmoo;

DROP TABLE IF EXISTS usuarios;
CREATE TABLE IF NOT EXISTS usuarios (
	id INT UNSIGNED NOT NULL AUTO_iNCREMENT,
    id_personalizavel VARCHAR(30) DEFAULT NULL, -- referente a um identificador que o usuário pode personalizar e que deve ser único. Ex: usuario_123
    id_lattes VARCHAR(100) DEFAULT NULL,

	nome_completo VARCHAR(50) NOT NULL,
    email VARCHAR(40) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    senha VARCHAR(40) NOT NULL,
    categoria ENUM("qualificado", "entusiasta", "admin") NOT NULL,

    data_cadastro VARCHAR(10) NOT NULL,

    seguidores INT UNSIGNED DEFAULT 0,
    seguindo INT UNSIGNED DEFAULT 0,
    pontos INT UNSIGNED DEFAULT 0,
    advertencias INT UNSIGNED DEFAULT 0,
    
    idade INT UNSIGNED DEFAULT NULL,

	caminho_foto_perfil VARCHAR (200) DEFAULT "midias/imagens/foto-perfil-padrao.jpg",
    caminho_banner VARCHAR (200) DEFAULT "midias/imagens/banner-padrao.jpg",
    verificado ENUM("sim", "não") DEFAULT "não",

    PRIMARY KEY (id),
    UNIQUE KEY (id_personalizavel),
    UNIQUE KEY (email),
    UNIQUE KEY (cpf),
    UNIQUE KEY (id_lattes)
);

INSERT INTO usuarios (nome_completo, email, cpf, senha, categoria, data_cadastro) 
VALUES 	('Victor Ribeiro Cunha', 'victorribeiro2929@gmail.com', '123', '12345678912', 'qualificado', '29/06/2022'),
		('Fernanda Rocha', 'fe132@gmail.com', '321', '09876543210', 'entusiasta', '12/10/2022'),
        ('Pedro João Lucas', 'pjc@gmail.com', '213', '56789012345', 'entusiasta', '16/11/2022');
        
SELECT * FROM usuarios;

DROP TABLE IF EXISTS publicacoes;
CREATE TABLE IF NOT EXISTS publicacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_autor INT UNSIGNED NOT NULL,

    caminho_imagem VARCHAR(100) NOT NULL,
    titulo VARCHAR(300) NOT NULL,
    descricao VARCHAR(1000) NOT NULL,
    categoria ENUM("discussao", "pesquisa", "review") NOT NULL,
    conteudo MEDIUMTEXT NOT NULL,
    
    pontos INT UNSIGNED DEFAULT NULL,
    
    status ENUM("outra-categoria", "aberta", "fechada") DEFAULT "outra-categoria",

    tem_imagem ENUM("sim", "nao") DEFAULT "nao",
    imagem_e_escura ENUM("sim", "nao") DEFAULT "sim",

    -- termos / siglas,
    -- links bibliográficos

    data VARCHAR(10) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_autor) REFERENCES usuarios (id)
);

INSERT INTO publicacoes (id_autor, caminho_imagem, categoria, titulo, conteudo, descricao, tem_imagem, imagem_e_escura, data, status)
VALUES  ('2', 'midias/imagens/publicacao-1.jpg', 'review', 'Esse é o título da publicação', 'Conteúdo da publicação', 'Descrição', 'sim', 'sim', '29/06/2022', "outra-categoria"),
        ('3', 'midias/imagens/publicacao-1.jpg', 'discussao', 'Esse é o título da publicação', 'Conteúdo da publicação', 'Descrição', 'sim', 'sim', '29/06/2022', "aberta"),
        ('1', 'midias/imagens/publicacao-2.jpg', 'pesquisa', 'Esse é o título da publicação', 'Conteúdo da publicação', 'Descrição', 'sim', 'nao', '29/06/2022', "outra-categoria");
        
SELECT * FROM publicacoes;

SELECT U.id, U.caminho_foto_perfil, U.nome_completo, P.caminho_imagem, P.titulo, P.descricao, P.tem_imagem, P.imagem_e_escura FROM publicacoes P
INNER JOIN usuarios U
ON U.id = 1 AND U.id = P.id_autor;

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
    FOREIGN KEY (id) REFERENCES publicacoes (id)
);

INSERT INTO comentarios (id_usuario, id_publicacao, data, hora, conteudo) 
VALUES 	('2', '1', '10/10/2022', '10:45', 'Que legal!'),
		('1', '1', '10/11/2022', '08:20', 'Realmente interessante!'),
        ('3', '3', '10/08/2022', '09:15', 'Uau!');

SELECT U.id, U.caminho_foto_perfil, U.nome_completo, C.conteudo, P.id as id_publicacao FROM comentarios C
INNER JOIN publicacoes P
ON C.id_publicacao = P.id
INNER JOIN usuarios U
ON C.id = U.id AND P.id_autor = 1;

SELECT U.nome_completo as nome_autor, P.data, P.titulo, P.descricao, P.caminho_imagem, P.conteudo FROM publicacoes P
INNER JOIN usuarios U
ON P.id_autor = U.id;

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
        
SELECT * FROM notificacoes;

SELECT U.caminho_foto_perfil, U.nome_completo, N.categoria FROM notificacoes N
INNER JOIN usuarios U
ON N.id_remetente = U.id;

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