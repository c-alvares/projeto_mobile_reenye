require('dotenv').config();
const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const tasks = require('./src/routes/tasks.routes');

const app = express()
    .use(express.json())
    .use(cors())
    .use(tasks)


app.listen(PORT, () => {
    console.log('Servidor em execução na porta ' + PORT);
});