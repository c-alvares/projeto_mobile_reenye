const express = require('express');
const router = express.Router();

const Taks = require('../controllers/tarefas.controller');

router.post("/criartarefa", Taks.createTask);
router.get("/listartarefas", Taks.listAllTasks);
router.get("/tarefasabertas", Taks.listOpenedTasks);
router.get("/tarefasfinalizadas", Taks.listFinishedTasks);
router.get("/tarefascanceladas", Taks.listCanceledTasks);
router.put("/finalizartarefa", Taks.toFinishTask);
router.put("/cancelartarefas", Taks.toCancelTask);

module.exports = router;