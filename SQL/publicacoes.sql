DROP TABLE IF EXISTS publicacoes;
CREATE TABLE IF NOT EXISTS publicacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_autor INT UNSIGNED NOT NULL,

    caminho_imagem VARCHAR(100) NOT NULL,
    titulo VARCHAR(300) NOT NULL,
    conteudo MEDIUMTEXT NOT NULL,

    -- termos / siglas,
    -- links bibliográficos

    data_inicio VARCHAR(10) NOT NULL,
    data_fim VARCHAR(10) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_autor) REFERENCES usuarios (id)
);

INSERT INTO publicacoes (id_autor, caminho_imagem, titulo, conteudo, data) VALUES ('1', 'midias/imagens/publicacao-1', 'Esse é o título da publicação', 'Conteúdo da publicação', '29/06/2022');