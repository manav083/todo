const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    status: {type: String, required: false, default: "todo", enum:["todo", "progress", "done"]},
    description: String,
})


module.exports = mongoose.model("todo", todoSchema);

