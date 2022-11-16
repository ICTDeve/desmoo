DROP DATABASE IF EXISTS desmoo;
CREATE DATABASE IF NOT EXISTS desmoo;
USE desmoo;

DROP TABLE IF EXISTS usuarios;
CREATE TABLE IF NOT EXISTS usuarios (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_personalizavel VARCHAR(30) DEFAULT NULL,
    id_lattes VARCHAR(100) DEFAULT NULL,
	nome_completo VARCHAR(50) NOT NULL,
    email VARCHAR(40) NOT NULL,
    senha VARCHAR(40) NOT NULL,
    idade INT UNSIGNED  DEFAULT NULL,
    cpf VARCHAR(11) NOT NULL,

    data_cadastro VARCHAR(10) NOT NULL,
    categoria ENUM("qualificado", "entusiasta", "admin") NOT NULL,

    seguidores INT UNSIGNED DEFAULT 0,
    seguindo INT UNSIGNED DEFAULT 0,
    pontos INT UNSIGNED DEFAULT 0,
    advertencias INT UNSIGNED DEFAULT 0,

    PRIMARY KEY (id),
    UNIQUE KEY (id_personalizavel),
    UNIQUE KEY (email),
    UNIQUE KEY (cpf),
    UNIQUE KEY (id_lattes)
);

DROP TABLE IF EXISTS graduacoes;
CREATE TABLE IF NOT EXISTS graduacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,

    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS graduacoes_usuarios;
CREATE TABLE IF NOT EXISTS graduacoes_usuarios (
    id_graduacao INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    PRIMARY KEY (id_graduacao, id_usuario),
    FOREIGN KEY (id_graduacao) REFERENCES graduacoes (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    UNIQUE KEY  (id_graduacao, id_usuario)
);

DROP TABLE IF EXISTS solicitacoes;
CREATE TABLE IF NOT EXISTS solicitacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    UNIQUE KEY (id_usuario)
);

DROP TABLE IF EXISTS areas_conhecimento;
CREATE TABLE IF NOT EXISTS areas_conhecimento (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY (nome)
);

DROP TABLE IF EXISTS subareas_conhecimento;
CREATE TABLE IF NOT EXISTS subareas_conhecimento (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_area_conhecimento INT UNSIGNED NOT NULL,
    nome VARCHAR(30) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_area_conhecimento) REFERENCES areas_conhecimento (id),
    UNIQUE KEY (nome)
);

CREATE TABLE IF NOT EXISTS publicacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_autor INT UNSIGNED NOT NULL,

    titulo VARCHAR(300) NOT NULL,
    conteudo MEDIUMTEXT NOT NULL,

    data_inicio VARCHAR(10) NOT NULL,
    data_fim VARCHAR(10) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_autor) REFERENCES usuarios (id)
);

DROP TABLE IF EXISTS pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_autor INT UNSIGNED NOT NULL,

    titulo VARCHAR(300) NOT NULL,
    descricao TINYTEXT NOT NULL,

    data_inicio VARCHAR(10) NOT NULL,
    data_fim VARCHAR(10) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_autor) REFERENCES usuarios (id),
    UNIQUE KEY (id, titulo)
);

DROP TABLE IF EXISTS perguntas_pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS perguntas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_pesquisa INT UNSIGNED NOT NULL,
    
    conteudo VARCHAR(255) NOT NULL,
    tipo ENUM("dissertativa", "resposta unica", "multipla_escolha", "ranking") NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY (id, conteudo)
);

DROP TABLE IF EXISTS respostas_dissertativas_pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS respostas_dissertativas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_pergunta INT UNSIGNED NOT NULL,
    id_pesquisa_de_campo INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    conteudo TINYTEXT DEFAULT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_pergunta) REFERENCES perguntas_pesquisas_de_campo (id),
    FOREIGN KEY (id_pesquisa_de_campo) REFERENCES pesquisas_de_campo (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

DROP TABLE IF EXISTS respostas_unicas_pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS respostas_unicas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_pergunta INT UNSIGNED NOT NULL,
    id_pesquisa_de_campo INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    conteudo VARCHAR(70) NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (id_pergunta) REFERENCES perguntas_pesquisas_de_campo (id),
    FOREIGN KEY (id_pesquisa_de_campo) REFERENCES pesquisas_de_campo (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

DROP TABLE IF EXISTS respostas_multiplas_pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS respostas_multiplas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_pergunta INT UNSIGNED NOT NULL,
    id_pesquisa_de_campo INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    conteudo VARCHAR(70) NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (id_pergunta) REFERENCES perguntas_pesquisas_de_campo (id),
    FOREIGN KEY (id_pesquisa_de_campo) REFERENCES pesquisas_de_campo (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

DROP TABLE IF EXISTS respostas_rankeadas_pesquisas_de_campo;
CREATE TABLE IF NOT EXISTS respostas_rankeadas_pesquisas_de_campo (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_pergunta INT UNSIGNED NOT NULL,
    id_pesquisa_de_campo INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,

    numero_ranking INT UNSIGNED NOT NULL,
    conteudo VARCHAR(70) NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (id_pergunta) REFERENCES perguntas_pesquisas_de_campo (id),
    FOREIGN KEY (id_pesquisa_de_campo) REFERENCES pesquisas_de_campo (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

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
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	id_usuario INT UNSIGNED NOT NULL,
    id_publicacao INT UNSIGNED NOT NULL,

    data VARCHAR(10) NOT NULL,
	
    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    FOREIGN KEY (id_publicacao) REFERENCES publicacoes (id)
);

DROP TABLE IF EXISTS perfis;
CREATE TABLE IF NOT EXISTS perfis (
    id_usuario INT UNSIGNED NOT NULL,
    descricao TINYTEXT NOT NULL,

    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

DROP TABLE IF EXISTS pesquisas;
CREATE TABLE IF NOT EXISTS pesquisas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,
    conteudo_pesquisa VARCHAR (100) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

DROP TABLE IF EXISTS pastas;
CREATE TABLE IF NOT EXISTS pastas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,

    nome VARCHAR(40) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
    UNIQUE KEY (id_usuario, nome)
);

DROP TABLE IF EXISTS configuracoes;
CREATE TABLE IF NOT EXISTS configuracoes (
    tema ENUM("claro", "escuro") 
);