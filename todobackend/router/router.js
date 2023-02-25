const express = require("express");
const router = express();
const userRouter = require("./userRouter");


router.use("/user",userRouter);

router.get("/", (req,res) => {
    res.json({
        result: "Success!"
    });

});

router.post("/update", (req, res) => {
    res.json({
        result: "Success! update"
    });
})

module.exports = router;