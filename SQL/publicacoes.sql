DROP TABLE IF EXISTS publicacoes;
CREATE TABLE IF NOT EXISTS publicacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_autor INT UNSIGNED NOT NULL,

    caminho_imagem VARCHAR(100) NOT NULL,
    titulo VARCHAR(300) NOT NULL,
    conteudo MEDIUMTEXT NOT NULL,

    tem_imagem ENUM("sim", "nao") DEFAULT "nao",
    imagem_e_escura ENUM("sim", "nao") DEFAULT "sim",

    -- termos / siglas,
    -- links bibliográficos

    data_publicacao VARCHAR(10) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_autor) REFERENCES usuarios (id)
);

INSERT INTO publicacoes (id_autor, caminho_imagem, titulo, conteudo, tem_imagem, imagem_e_escura, data_publicacao)
VALUES  ('1', 'midias/imagens/publicacao-1', 'Esse é o título da publicação', 'Conteúdo da publicação', 'sim', 'sim', '29/06/2022'),
        ('2', 'midias/imagens/publicacao-1', 'Esse é o título da publicação', 'Conteúdo da publicação', 'sim', 'sim', '29/06/2022'),
        ('1', 'midias/imagens/publicacao-2', 'Esse é o título da publicação', 'Conteúdo da publicação', 'sim', 'sim', '29/06/2022');