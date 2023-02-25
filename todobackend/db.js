const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/myCollection", {useUnifiedTopology: true, useNewUrlParser: true}).then((msg) =>
    console.log("mongodb connected")
).catch(() => console.log("failed!!"));


module.exports = mongoose;