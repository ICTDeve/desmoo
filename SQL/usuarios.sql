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

    verificado ENUM("sim", "não") NOT NULL,

    PRIMARY KEY (id),
    UNIQUE KEY (id_personalizavel),
    UNIQUE KEY (email),
    UNIQUE KEY (cpf),
    UNIQUE KEY (id_lattes)
);

INSERT INTO usuarios (nome_completo, email, cpf, senha, categoria, data_cadastro) VALUES ('Victor Ribeiro Cunha', 'victorribeiro2929@gmail.com', '123', '12345678912', 'qualificado', '29/06/2022');