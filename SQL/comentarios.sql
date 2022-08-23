DROP TABLE IF EXISTS comentarios;

CREATE TABLE IF NOT EXISTS comentarios (
    id INT UNSIGNED NOT NULL AUTO_iNCREMENT,
	id_usuario VARCHAR(50) NOT NULL,

    id_publicacao INT UNSIGNED NOT NULL

    data_publicacao VARCHAR(10) NOT NULL;

    FOREIGN KEY (id_publicacao) REFERENCES publicacoes;
    FOREIGN KEY (id_usuario) REFERENCES usuarios;
);