DROP TABLE IF EXISTS usuarios;

CREATE TABLE IF NOT EXISTS usuarios (
	id INT UNSIGNED NOT NULL AUTO_iNCREMENT,
    id_personalizavel VARCHAR(30) NOT NULL, -- referente a um identificador que o usuário pode personalizar e que deve ser único. Ex: usuario_123
	nome_completo VARCHAR(50) NOT NULL,
    email VARCHAR(40) NOT NULL,
    senha VARCHAR(40) NOT NULL,
    idade INT UNSIGNED NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    id_lattes VARCHAR(100) NOT NULL,
    -- graduacoes VARCHAR(100),

    -- data_cadastro VARCHAR(10) DEFAULT CURRENT DATA,
    -- status ENUM("qualificado", "entusiasta") NOT NULL,
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