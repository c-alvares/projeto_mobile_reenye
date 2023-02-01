const tasks = require('../models/tasks.model');
const con = require('../DAO/agenda.dao')

const createTask = (req, res) => {
    con.query(tasks.newTask(req.body), (err, result) => {
        if (err == null)
            res.json('Cadastrado com Sucesso').status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listAllTasks = (req, res) => {
    con.query(tasks.showTasks(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).json(err).end()
    });
}

const listOpenedTasks = (req, res) => {
    con.query(tasks.openedTasks(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}


const listFinishedTasks = (req, res) => {
    con.query(tasks.finishedTasks(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}

const listCanceledTasks = (req, res) => {
    con.query(tasks.canceledTasks(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}

const toFinishTask = (req, res) => {
    con.query(tasks.finishTask(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).json(result).end();
        else
            res.status(500).end();
    });
}

const toCancelTask = (req, res) => {
    con.query(tasks.cancelTask(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).json(result).end();
        else
            res.status(500).end();
    });
}


module.exports = {
    createTask,
    listAllTasks,
    listOpenedTasks,
    listFinishedTasks,
    listCanceledTasks,
    toFinishTask,
    toCancelTask
}