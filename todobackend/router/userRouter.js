const express = require("express");
const router = express();
const userController = require("../Controller/userController")

router.get("/getTodo", userController.getTodo);

router.post("/addTodo", userController.addTodo);

router.delete("/deleteTodo/:id", userController.deleteTodo);

router.put("/updateTodo", userController.updateTodo);


router.post("/update", (req, res) => {
    res.json({
        result: "Success! update"
    });
})

module.exports = router;