const restful = require('node-restful')
const mongoose = restful.mongoose

//description: descrição da tarefa
// verifica se ja foi concluido
// data para ordenarmos as consultas
const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default:false},
    createdAt: {type: Date, default: Date.now}

})

//aqui é uma forma de exportação
module.exports = restful.model('Todo', todoSchema)