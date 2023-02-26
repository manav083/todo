const express = require("express");
const router = express();
const todoRouter = require("./todoRouter");
const userController = require("../Controller/userController");

const auth = require("../middleware/auth");

router.use("/todo", todoRouter);

router.get("/", (req, res) => {
    res.json({
        result: "Success!"
    });

});

// Register
router.post("/register", userController.register);

// Login
router.post("/login", userController.login);


router.post("/welcome", auth, (req, res) => {
    // console.log("user::::::;", req.user);
    res.status(200).send("Welcome 🙌 ");
  });

router.post("/update", (req, res) => {
    res.json({
        result: "Success! update"
    });
})

module.exports = router;