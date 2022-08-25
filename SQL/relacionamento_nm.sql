DROP DATABASE IF EXISTS teste_relacionamento;
CREATE DATABASE IF NOT EXISTS teste_relacionamento;
USE teste_relacionamento;

DROP TABLE IF EXISTS materias_por_turmas;
DROP TABLE IF EXISTS turmas;
DROP TABLE IF EXISTS materias;

-- CRIAÇÃO DA TABELA "TURMAS"
CREATE TABLE IF NOT EXISTS turmas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    turma VARCHAR(20) NOT NULL,

    UNIQUE KEY (turma),
    PRIMARY KEY (id)
);

-- INSERÇÃO DE ALGUMAS TURMAS
INSERT INTO turmas -- NOME DA TABELA
    (turma) -- NOME DO CAMPO REFERENTE À TABELA ACIMA
VALUES
    ("1ºA"),
    ("1ºB"),
    ("1ºC");

-- CRIAÇÃO DA TABELA "MATERIAS"
CREATE TABLE IF NOT EXISTS materias (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    materia VARCHAR(20) NOT NULL,

    UNIQUE KEY (materia),
    PRIMARY KEY (id)
);

-- INSERÇÃO DE ALGUMAS MATÉRIAS
INSERT INTO materias -- NOME DA TABELA
    (materia) -- NOME DO CAMPO REFERENTE À TABELA ACIMA
VALUES
    ("Artes"),
    ("Culinária"),
    ("Filosofia");

-- CRIAÇÃO DA TABELA "MATERIAS" (TABELA INTERMEDIÁRIA PARA RELACIONAMENTO DAS TABELAS "TURMAS" E "MATÉRIAS")
CREATE TABLE IF NOT EXISTS materias_por_turmas (
    id_turma INT UNSIGNED NOT NULL,
    id_materia INT UNSIGNED NOT NULL,

    UNIQUE KEY (id_turma, id_materia),
    FOREIGN KEY (id_turma) REFERENCES turmas (id),
    FOREIGN KEY (id_materia) REFERENCES materias (id),
    PRIMARY KEY (id_turma, id_materia)
);

-- RELACIONAMENTO MANUAL ENTRE TURMAS E MATÉRIAS
 INSERT INTO materias_por_turmas
     (id_turma, id_materia)
 VALUES
     (1, 1),
     (1, 2),

     (2, 1);

-- -- SELEÇÃO DO NOME DAS MATÉRIAS QUE A TURMA COM O ID "1" TEM
SELECT m.materia FROM turmas t 
JOIN materias_por_turmas mt
ON mt.id_turma = 1 AND t.id = 1
JOIN materias m
ON m.id = mt.id_materia;

-- CRIAÇÃO DA TABELA ALUNOS
CREATE TABLE IF NOT EXISTS alunos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_turma INT UNSIGNED NOT NULL,
    nome VARCHAR(50) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_turma) REFERENCES turmas (id)
);

-- INSERÇÃO DOS ALUNOS
INSERT INTO alunos
    (id_turma, nome)
VALUES
    (1, "Isabela dos Santos"),
    (2, "Victor Ribeiro");
    
-- SELEÇÃO DO NOME DA TURMA ATRAVÉS DO ID DO ALUNO
SELECT turma, nome FROM turmas, alunos
WHERE alunos.id = turmas.id;

-- SELEÇÃO DO NOME DAS MATÉRIAS QUE O ALUNO COM O ID "2" TEM
SELECT m.materia FROM alunos a 
JOIN materias_por_turmas mt
ON mt.id_turma = 2 AND a.id_turma = 2
JOIN materias m
ON m.id = mt.id_materia;