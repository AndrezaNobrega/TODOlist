//mapeamento dos objetos em js, documentos q irão p o mongo
// conexão enviando comandos

const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise;
 module.exports = mongoose.connect("mongodb://localhost:27017/todo", 
 {     useMongoClient: true,      });