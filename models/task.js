const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxLength: [20, "more than 20 chrecters is not supported"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)