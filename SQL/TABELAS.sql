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
    cpf VARCHAR(15) NOT NULL,
    senha VARCHAR(40) NOT NULL,
    categoria ENUM("qualificado", "entusiasta", "admin") NOT NULL,

    data_cadastro VARCHAR(10) NOT NULL,

    seguidores INT UNSIGNED DEFAULT 0,
    seguindo INT UNSIGNED DEFAULT 0,
    pontos INT UNSIGNED DEFAULT 0,
    advertencias INT UNSIGNED DEFAULT 0,
    
    idade INT UNSIGNED DEFAULT NULL,
    
    sobre VARCHAR(3000) DEFAULT NULL,

	caminho_foto_perfil VARCHAR (200) DEFAULT "midias/imagens/foto-perfil-padrao.jpg",
    caminho_banner VARCHAR (200) DEFAULT "midias/imagens/banner-padrao.jpg",
    verificado ENUM("sim", "não") DEFAULT "não",

    PRIMARY KEY (id),
    UNIQUE KEY (id_personalizavel),
    UNIQUE KEY (email),
    UNIQUE KEY (cpf),
    UNIQUE KEY (id_lattes)
);

SELECT * FROM usuarios;

INSERT INTO usuarios (id_lattes, nome_completo, email, cpf, senha, categoria, data_cadastro, caminho_foto_perfil, sobre) 
VALUES 	('1234', 'Carlos Henrique Magalhães', 'victorribeiro2929@gmail.com', '123', '12345678912', 'qualificado', '29/06/2022', 'midias/imagens/foto-perfil-1.jpg', 'Doutor em Ciências com ênfase em Neuropsicofarmacologia pela USP. Consultor e palestrante, desenvolve aplicações dos conhecimentos neurocientíficos no ambiente corporativo e na educação de todos os níveis. Explora temas como Vieses Inconscientes nas Tomadas de Decisão, Vícios e Virtudes e as Mudanças de Comportamento, Promoção de Saúde Mental, Cérebro dos Líderes ou temas customizados em neurociência em palestras, workshops e minicursos.'),
		('', 'Diego Silva Oliveira', 'fe132@gmail.com', '321', '09876543210', 'entusiasta', '12/10/2022', 'midias/imagens/foto-perfil-2.jpg', 'Cirurgião Dentista, Ortodontista com atuação em Cirurgia oral menor, Disfunções da ATM e Odontologia Estética. Aplicação de Toxina Botulínica com finalidade terapêutica, bem como uso de Ácido hialuronico no preenchimento facial. Credenciado Invisalign e Essix Aligners. Ambos, sistemas de correção dentária através de placas estéticas, proporcionam maior conforto durante o tratamento.'),
        ('4321', 'Victor Ribeiro Cunha', 'pjc@gmail.com', '213', '56789012345', 'entusiasta', '16/11/2022', 'midias/imagens/foto-perfil-3.jpg', 'Biólogo formado pela faculdade Anhanguera de Brasília, cursando pós-graduação em análises clínicas. Durante a graduação, realizei diversos workshops em feiras acadêmicas destinada a biologia. Fiz uma pesquisa no laboratório da UNB durante 2 anos sobre entoparasitas.');
        
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
VALUES  ('2', 'midias/imagens/publicacao-1.jpg', 'review', 'Significado de "Astronomia"', 'Astronomia é uma ciência multidisciplinar que estuda uma grande variedade de corpos celestes e fenômenos que acontecem fora da Terra. Ela estuda a Lua, o Sol, os planetas do Sistema Solar, cometas, galáxias, nebulosas, entre outros, em busca de entender um pouco melhor o Universo em que vivemos.', 'Nessa review tentarei explicar a você o significado de astronomia', 'sim', 'sim', '29/06/2022', "outra-categoria"),
        ('3', '', 'discussao', 'O que é TDAH?', 'Conteúdo da publicação', 'Oi, tenho curiosidades acerca desse assunto e gostaria de saber se alguém poderia me ajudar.', 'nao', 'nao', '29/06/2022', "aberta"),
        ('1', 'midias/imagens/publicacao-2.jpg', 'review', 'O que são sinapses', 'As sinapses são junções entre a terminação de um neurônio e a membrana de outro neurônio. São elas que fazem a conexão entre células vizinhas, dando continuidade à propagação do impulso nervoso por toda a rede neuronal. Os neurônios fazem a comunicação entre os órgãos do corpo e o meio externo, isso acontece através de sinais elétricos. Os impulsos elétricos percorrem toda a extensão do neurônio, indo do corpo celular aos axônios, mas não podem passar de um neurônio a outro. O espaço entre as membranas das células é chamado fenda sináptica. A membrana do axônio que gera o sinal e libera as vesículas na fenda é chamada pré-sináptica, enquanto que a membrana que recebe o estímulo através dos neurotransmissores é chamada pós-sináptica.', 'Vou explicar um pouquinho da conceituação de "sinapses", venha conferir caso tenha curiosidade!', 'sim', 'nao', '09/06/2022', "outra-categoria");
        
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

INSERT INTO curtidas (id_usuario, id_publicacao, data) 
VALUES 	('1', '2', '10/10/2022'),
		('3', '2', '10/11/2022'),
        ('3', '3', '10/08/2022');

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
    
    id_remetente INT UNSIGNED NOT NULL,
    id_publicacao INT UNSIGNED NOT NULL,

    categoria ENUM("comentario", "curtida") NOT NULL,

    data VARCHAR(10) NOT NULL,
    hora VARCHAR(8) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_publicacao) REFERENCES publicacoes (id),
    FOREIGN KEY (id_remetente) REFERENCES usuarios (id)
);

INSERT INTO notificacoes (id_remetente, id_publicacao, data, hora, categoria) 
VALUES 	('3', '1', '10/10/2022', "10:25", "curtida"),
		('1', '3', '10/11/2022', "08:40", "comentario"),
        ('2', '3', '10/08/2022', "12:15", "curtida");
        
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

DELETE FROM solicitacoes WHERE id = 1;

UPDATE usuarios
SET categoria = "qualificado"
WHERE id = 3;

SELECT * FROM usuarios;

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
VALUES 	(2, 2, "Eu acho que eu tenho"),
		(2, 1, "Eita. Forças!");

SELECT P.id as id_publicacao, U.id as id_usuario, U.caminho_foto_perfil, U.nome_completo, CS.conteudo FROM comentarios_discussao CS
INNER JOIN publicacoes P
ON CS.id_publicacao = P.id AND P.id = 2
INNER JOIN usuarios U
ON CS.id_usuario = U.id;