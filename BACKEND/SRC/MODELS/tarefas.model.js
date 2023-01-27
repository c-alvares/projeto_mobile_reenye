// Cria novo tarefa
const newTask = (model) => {
    return `INSERT INTO tarefas VALUES (DEFAULT,'${model.descricao}','${model.hora_inicio}',NULL,1)`;
}


// Lista todos as tarefas
const showTasks = () => {
    return `SELECT * FROM View_Tarefas_e_Status`;
}

// Lista tarefas abertas
const openedTasks = () => {
    return `SELECT * FROM View_Tarefas_Abertas`;
}

// Lista tarefas finalizadas
const finishedTasks = () => {
    return `SELECT * FROM View_Tarefas_Finalizadas`;
}

// Lista tarefas canceladas
const canceledTasks = () => {
    return `SELECT * FROM View_Tarefas_Canceladas`;
}


// Atualiza hora de término da tarefa e status para finalizado
const finishTask = (model) => {
    return `UPDATE tarefas SET 
                hora_fim = CURTIME(),
                situacao = 2 
            WHERE id_tarefa = ${model.id_tarefa}`; 
}

// Atualiza situação para cancelada e hora de término da tarefa
const cancelTask = (model) => {
    return `UPDATE tarefas SET 
                hora_fim = CURTIME(),
                situacao = 3 
            WHERE id_tarefa = ${model.id_tarefa}`;
}



module.exports = {
    newTask,
    showTasks,
    openedTasks,
    finishedTasks,
    canceledTasks,
    finishTask,
    cancelTask
}