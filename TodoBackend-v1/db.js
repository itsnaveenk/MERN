const mongoose = require('mongoose');

/*
    *Todo {
    *   title: string,
    *  description: string,
    * completed: boolean
    *}
*/
mongoose.connect('mongodb://localhost:27017/todoDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error:', err));

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}