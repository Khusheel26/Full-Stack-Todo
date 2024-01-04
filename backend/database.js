const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://khusheel26:mkhusheel26032003@cluster0.gjq7lof.mongodb.net/')
const todoSchema = mongoose.Schema({
    title :String,
    description :String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports ={
    todo
}
