const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {

// const nome que quiser = await nomeDB.nomeTabela.propriedade a utilizar
    const task = await prisma.estatus.create({
        data: req.body
    });

    res.status(200).json(task).end();
}

const read = async (req, res) => {
    const task = await prisma.estatus.findMany();

    res.status(200).json(task).end();
}


module.exports = {
    create,
    read,
    // readFunc,
    // update,
    // remove
}