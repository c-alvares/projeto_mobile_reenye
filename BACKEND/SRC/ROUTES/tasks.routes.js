const express = require('express');
const router = express.Router();

const Tasks = require('../CONTROLLERS/tasks.controller');
// const PrismaStatus = require('../CONTROLLERS/prisma.status.controller');
// const PrismaTask = require('../CONTROLLERS/prisma.task.controller')

router.post("/criartarefa", Tasks.createTask);
router.get("/listartarefas", Tasks.listAllTasks);
router.get("/tarefasabertas", Tasks.listOpenedTasks);
router.get("/tarefasfinalizadas", Tasks.listFinishedTasks);
router.get("/tarefascanceladas", Tasks.listCanceledTasks);
router.put("/finalizartarefa", Tasks.toFinishTask);
router.put("/cancelartarefas", Tasks.toCancelTask);



// router.post("/creatstatus", PrismaStatus.create);
// router.get("/readstatus", PrismaStatus.read);

// router.post("/createtask", PrismaTask.create);
// router.get("/readtask", PrismaTask.read);

module.exports = router;