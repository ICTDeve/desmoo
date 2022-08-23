CREATE TABLE usuarios (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE categorias (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO usuarios
	(nome)
VALUES
	('Carlos'),
    ('Diego'),
    ('Victor');
    
INSERT INTO categorias
	(nome)
VALUES
	('neurociência'),
    ('biotecnologia'),
    ('odontologia');
    
CREATE TABLE IF NOT EXISTS interesses_usuarios (
	usuario_id INT UNSIGNED NOT NULL,
    categoria_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (usuario_id, categoria_id)
);

INSERT INTO interesses_usuarios
	(usuario_id, categoria_id)
VALUES
	(1, ""),
    (1, 2),
    
    (2, 1),
    (2, 2),
    (2, 3),
    
    (3, 1),
    (3, 2);
    
SELECT usuarios.nome Usuarios, categorias.nome Categorias 
FROM usuarios, interesses_usuarios, categorias
WHERE usuarios.id = interesses_usuarios.usuario_id
AND categorias.id = interesses_usuarios.categoria_id;