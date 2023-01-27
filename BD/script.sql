DROP DATABASE IF EXISTS agenda;
CREATE DATABASE agenda CHARSET=utf8 COLLATE utf8_general_ci;
USE agenda;

CREATE TABLE estatus(
    id_status INT(4) NOT NULL AUTO_INCREMENT,
    situacao VARCHAR(10) NOT NULL,
    CONSTRAINT pk_pedido primary key (id_status)
);

CREATE TABLE tarefas(
    id_tarefa INT(4) NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fim TIME NULL,
    situacao int(10) NOT NULL,
    CONSTRAINT pk_tarefa primary key (id_tarefa),
    FOREIGN KEY (situacao) REFERENCES estatus(id_status)
);

DESCRIBE estatus;
DESCRIBE tarefas;

INSERT INTO estatus VALUES
(DEFAULT, "ABERTA"), 
(DEFAULT, "FINALIZADA"), 
(DEFAULT, "CANCELADA"); 

INSERT INTO tarefas VALUES 
(DEFAULT,"Estudar SQL",'19:00',NULL,1),
(DEFAULT,"Ir na academia",'15:30',NULL,1),
(DEFAULT,"Fazer almoço",'12:00','13:00',2),
(DEFAULT,"Tomar complexo vitamínico",'08:00',CURTIME(),1),
(DEFAULT,"Fazer projeto mobile",'17:00',NULL,3),
(DEFAULT,"Ir ao médico",'11:00',NULL,3);



-- Lista todas as tarefas
DROP VIEW IF EXISTS View_Tarefas_e_Status;
CREATE VIEW View_Tarefas_e_Status AS
SELECT t.id_tarefa, t.descricao, t.hora_inicio, t.hora_fim, e.situacao 
FROM tarefas t INNER JOIN estatus e 
ON t.situacao = e.id_status
ORDER BY t.id_tarefa;

SELECT * FROM View_Tarefas_e_Status;

-- Lista tarefas abertas
DROP VIEW IF EXISTS View_Tarefas_Abertas;
CREATE VIEW View_Tarefas_Abertas AS
SELECT t.id_tarefa, t.descricao, t.hora_inicio, t.hora_fim, e.situacao 
FROM tarefas t INNER JOIN estatus e 
ON t.situacao = e.id_status
WHERE e.situacao LIKE '%aberta%' 
ORDER BY t.id_tarefa;

SELECT * FROM View_Tarefas_Abertas;

-- Lista tarefas finalizadas
DROP VIEW IF EXISTS View_Tarefas_Finalizadas;
CREATE VIEW View_Tarefas_Finalizadas AS
SELECT t.id_tarefa, t.descricao, t.hora_inicio, t.hora_fim, e.situacao 
FROM tarefas t INNER JOIN estatus e 
ON t.situacao = e.id_status
WHERE e.situacao LIKE '%finalizada%' 
ORDER BY t.id_tarefa;

SELECT * FROM View_Tarefas_Finalizadas;

-- Lista tarefas canceladas
DROP VIEW IF EXISTS View_Tarefas_Canceladas;
CREATE VIEW View_Tarefas_Canceladas AS
SELECT t.id_tarefa, t.descricao, t.hora_inicio, t.hora_fim, e.situacao 
FROM tarefas t INNER JOIN estatus e 
ON t.situacao = e.id_status
WHERE e.situacao LIKE '%cancelada%' 
ORDER BY t.id_tarefa;

SELECT * FROM View_Tarefas_Canceladas;