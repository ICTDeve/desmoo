-- Objetivo: Selecionar todas as matérias que estão relacionadas à turma "1ºA"

DROP DATABASE IF EXISTS teste_relacionamento;
CREATE DATABASE IF NOT EXISTS teste_relacionamento;
USE teste_relacionamento;

DROP TABLE IF EXISTS materias_por_turmas;
DROP TABLE IF EXISTS turmas;
DROP TABLE IF EXISTS materias;

-- CRIAÇÃO E INSERÇÃO DE TURMAS
CREATE TABLE IF NOT EXISTS turmas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    turma VARCHAR(20) NOT NULL,

    UNIQUE KEY (turma),
    PRIMARY KEY (id)
);

INSERT INTO turmas
    (turma)
VALUES
    ("1ºA"),
    ("1ºB"),
    ("1ºC");


-- CRIAÇÃO E INSERÇÃO DE MATÉRIAS
CREATE TABLE IF NOT EXISTS materias (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    materia VARCHAR(20) NOT NULL,

    UNIQUE KEY (materia),
    PRIMARY KEY (id)
);

INSERT INTO materias -- NOME DA TABELA
    (materia) -- NOME DO CAMPO REFERENTE À TABELA ACIMA
VALUES
    ("Artes"),
    ("Culinária"),
    ("Filosofia");

-- CRIAÇÃO E INSERÇÃO DE MATÉRIAS POR TURMAS (TABÉLA INTERMEDIÁRIA PARA RELACIONAMENTO DAS TABELAS "TURMAS" E "MATÉRIAS")
CREATE TABLE IF NOT EXISTS materias_por_turmas (
    id_turma INT UNSIGNED NOT NULL,
    id_materia INT UNSIGNED NOT NULL,

    UNIQUE KEY (id_turma, id_materia),
    FOREIGN KEY (id_turma) REFERENCES turmas (id),
    FOREIGN KEY (id_materia) REFERENCES materias (id),
    PRIMARY KEY (id_turma, id_materia)
);

 INSERT INTO materias_por_turmas
     (id_turma, id_materia)
 VALUES
     (1, 1),
     (1, 2),

     (2, 1);

-- SELECIONANDO DISCIPLINAS DE ACORDO COM UMA TURMA X
<<<<<<< HEAD
SELECT * FROM turmas t 
JOIN materias_por_turmas mt
ON mt.id_turma = t.id 
JOIN materias m
ON m.id = mt.id_materia;
=======
SELECT id_materia
INNER JOIN materias_por_turmas
ON materias_por_turmas.id_turma = 1;

SELECT materia
FROM materias
WHERE id = 1;

SELECT materia
FROM materias
WHERE id = 2;

>>>>>>> 42d9504b7e8b12de564c2fe95b5e17b4f9814c22

CREATE TABLE IF NOT EXISTS alunos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_turma INT UNSIGNED NOT NULL,
    nome VARCHAR(50) NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (id_turma) REFERENCES turmas (id)
);

INSERT INTO alunos
    (id_turma, nome)
VALUES
    (1, "Isabela dos Santos"),
    (2, "Victor Ribeiro");