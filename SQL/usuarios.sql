DROP TABLE IF EXISTS usuarios;
CREATE TABLE IF NOT EXISTS usuarios (
	id INT UNSIGNED NOT NULL AUTO_iNCREMENT,
    id_area_conhecimento INT UNSIGNED NOT NULL,

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
    FOREIGN KEY (id_area_conhecimento) REFERENCES areas_conhecimento (id),
    UNIQUE KEY (id_personalizavel),
    UNIQUE KEY (email),
    UNIQUE KEY (cpf),
    UNIQUE KEY (id_lattes)
);

INSERT INTO usuarios (id_area_conhecimento, nome_completo, email, cpf, senha, categoria, data_cadastro) 
VALUES 	('3', 'Victor Ribeiro Cunha', 'victorribeiro2929@gmail.com', '123', '12345678912', 'qualificado', '29/06/2022'),
		('5', 'Fernanda Rocha', 'fe132@gmail.com', '321', '09876543210', 'entusiasta', '12/10/2022'),
        ('1', 'Pedro João Lucas', 'pjc@gmail.com', '213', '56789012345', 'entusiasta', '16/11/2022');
        
SELECT * FROM usuarios;