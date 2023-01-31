const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body;

    info.hora_inicio = new Date(req.body.hora_inicio);

    const task = await prisma.tarefas.create({
        data: info
    });

    res.status(200).json(task).end();
}

const read = async (req, res) => {
    const task = await prisma.tarefas.findMany();

    res.status(200).json(task).end();
}


module.exports = {
    create,
    read,
    // readFunc,
    // update,
    // remove
}