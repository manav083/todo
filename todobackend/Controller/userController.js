const Todo = require('../models/todo');



const getTodo = async(req, res) => {
    try{
        const todo = await Todo.find();
        res.send(todo);
    }catch(err){
        res.send(err);
    }
}

const addTodo = async(req, res) => {
    // const title = req.body.title;
    // const status = req.body.status;
    try{
        // await Todo.insertMany({
        //     title: title,
        // })
      const data=  await Todo.create(req.body)
        res.send(data)
    }catch(err){
        res.send(err);
    }
}

const deleteTodo = async(req, res) => {
    
    try{
        const id = req.params.id;
        const data = await Todo.findOneAndDelete({_id: id});
        res.send(data);
    }catch(err){
        res.send(err)
    }
}

const updateTodo = async(req, res) => {
    try{
        console.log("req.body::", req.body);
        const id = req.body.id;
        const {title, description, status} = req.body
        const data = {
            title: title,
            description: description,
            status: status,
        }
        const result = await Todo.findOneAndUpdate({_id: id}, data)
        console.log(result);
        res.send(result);
    }catch(err){
        res.send(err);
    }
}

module.exports = {
    addTodo,
    getTodo,
    deleteTodo,
    updateTodo
}