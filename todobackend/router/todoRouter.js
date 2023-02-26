const express = require("express");
const router = express();
const todoController = require("../Controller/todoController")

router.get("/getTodo", todoController.getTodo);

router.post("/addTodo", todoController.addTodo);

router.delete("/deleteTodo/:id", todoController.deleteTodo);

router.put("/updateTodo", todoController.updateTodo);


router.post("/update", (req, res) => {
    res.json({
        result: "Success! update"
    });
})

module.exports = router;