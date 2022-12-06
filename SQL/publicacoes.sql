DROP TABLE IF EXISTS publicacoes;
CREATE TABLE IF NOT EXISTS publicacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_autor INT UNSIGNED NOT NULL,

<<<<<<< Updated upstream
=======
    caminho_imagem VARCHAR(100) DEFAULT NULL,
>>>>>>> Stashed changes
    titulo VARCHAR(300) NOT NULL,
<<<<<<< Updated upstream
    descricao VARCHAR(1000) NOT NULL,
    conteudo MEDIUMTEXT DEFAULT NULL,
=======
    categoria ENUM('discussao', 'pesquisa', 'review') NOT NULL,
    conteudo MEDIUMTEXT NOT NULL,
>>>>>>> Stashed changes


    -- termos / siglas,
    -- links bibliográficos

    data_inicio VARCHAR(10) NOT NULL,
    data_fim VARCHAR(10) NOT NULL

    PRIMARY KEY (id),
    FOREIGN KEY (id_autor) REFERENCES usuarios (id)
);