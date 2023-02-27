const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    try {
        // Get user input
        const { first_name, last_name, email, password } = req.body;

        // Validate user input
        if (!(email && password && first_name && last_name)) {
            res.status(201).send("All input is required");
        } else {

            // check if user already exist
            // Validate if user exist in our database
            const oldUser = await User.findOne({ email });

            if (oldUser) {
                return res.status(201).send("User Already Exist. Please Login");
            } else {


                //Encrypt user password
                encryptedPassword = await bcrypt.hash(password, 10);

                // Create user in our database
                const user = await User.create({
                    first_name,
                    last_name,
                    email: email.toLowerCase(), // sanitize: convert email to lowercase
                    password: encryptedPassword,
                });

                // Create token
                const token = jwt.sign(
                    { id: user._id, email, first_name, last_name },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                // save user token
                user.token = token;

                // return new user
                res.status(200).json(user);
            }
        }

    } catch (err) {
        console.log(err);
    }
}


const login = async (req, res) => {
    // console.log("gsdvhbsfjnmg");
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        // console.log("!(email && password)", !(email && password), "email", email, "password", password);
        if (!(email && password)) {
            res.status(201).send("All input is required");
        } else {


            // Validate if user exist in our database
            const user = await User.findOne({ email });
            // console.log("user::::", user, "(bcrypt.compare(password, user.password)", await (bcrypt.compare(password, user.password)));

            if (user && (await bcrypt.compare(password, user.password))) {
                // Create token
                const token = jwt.sign(
                    { user_id: user._id, email },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );
                // console.log("token::",token)
                // save user token
                user.token = token;
                // console.log("uesr::;;", user);
                // user
                res.status(200).send(user);
            } else {

                res.status(201).send("Invalid Credentials");
            }
        }
    } catch (err) {
        console.log(err);
    }
}

const logout = () => {
    try{
        
    }catch(err){
        res.send(err);
    }
}

module.exports = {
    register,
    login,
    logout
}