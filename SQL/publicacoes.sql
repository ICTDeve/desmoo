DROP TABLE IF EXISTS publicacoes;
CREATE TABLE IF NOT EXISTS publicacoes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_autor INT UNSIGNED NOT NULL,
    id_area_conhecimento INT UNSIGNED NOT NULL,

    caminho_imagem VARCHAR(100) NOT NULL,
    titulo VARCHAR(300) NOT NULL,
    legenda VARCHAR(1000) NOT NULL,
    categoria ENUM("discussao", "pesquisa", "review") NOT NULL,
    conteudo MEDIUMTEXT NOT NULL,
    
    pontos INT UNSIGNED DEFAULT NULL,

    tem_imagem ENUM("sim", "nao") DEFAULT "nao",
    imagem_e_escura ENUM("sim", "nao") DEFAULT "sim",

    -- termos / siglas,
    -- links bibliográficos

    data VARCHAR(10) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_autor) REFERENCES usuarios (id),
    FOREIGN KEY (id_area_conhecimento) REFERENCES areas_conhecimento (id)
);

INSERT INTO publicacoes (id_autor, id_area_conhecimento, caminho_imagem, categoria, titulo, conteudo, legenda, tem_imagem, imagem_e_escura, data)
VALUES  ('1', '1', 'midias/imagens/publicacao-1.jpg', 'review', 'Esse é o título da publicação', 'Conteúdo da publicação', 'Descrição', 'sim', 'sim', '29/06/2022'),
        ('2', '5', 'midias/imagens/publicacao-1.jpg', 'discussao', 'Esse é o título da publicação', 'Conteúdo da publicação', 'Descrição', 'sim', 'sim', '29/06/2022'),
        ('1', '3', 'midias/imagens/publicacao-2.jpg', 'pesquisa', 'Esse é o título da publicação', 'Conteúdo da publicação', 'Descrição', 'sim', 'sim', '29/06/2022');
        
SELECT * FROM publicacoes;

SELECT U.caminho_foto_perfil, U.nome_completo, P.caminho_imagem, P.titulo, P.legenda, P.tem_imagem, P.imagem_e_escura FROM publicacoes P
INNER JOIN usuarios U
ON U.id = P.id;