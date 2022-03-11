const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    userId: String,
    autor: String,
    editorial: String,
    yearimpresion: String,
    isbn: String,
    cantpage: String,
    sinopsis: String,
    tittle: String,
    genre: String,
    status: String,
    portada: String,
    date: { type: date, 
            default: Date.now
        }
})


const Task = mongoose.model('task',taskSchema)
module.exports = Task;