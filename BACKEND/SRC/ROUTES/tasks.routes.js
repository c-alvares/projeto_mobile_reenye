const express = require('express');
const router = express.Router();

const Tasks = require('../CONTROLLERS/tasks.controller');

router.post("/criartarefa", Tasks.createTask);
router.get("/listartarefas", Tasks.listAllTasks);
router.get("/tarefasabertas", Tasks.listOpenedTasks);
router.get("/tarefasfinalizadas", Tasks.listFinishedTasks);
router.get("/tarefascanceladas", Tasks.listCanceledTasks);
router.put("/finalizartarefa", Tasks.toFinishTask);
router.put("/cancelartarefas", Tasks.toCancelTask);

module.exports = router;