const express = require("express");
const { userModel } = require("../user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")

userRouter.post("/register", async (req, res) => {
  const { username, email, pass } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        res.status(200).send({ err: "something wrong" });
      } else {
        const user = new userModel({ username, email, pass: hash });
        await user.save();
        res
          .status(200)
          .send({ msg: "A new user has been updated now", msg: req.body });
      }
    });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await userModel.findOne({ email });
    bcrypt.compare(pass, user.pass,(err, result)=> {
        // result == true
        if (result) {
            const token = jwt.sign({username:user.username,userID:user._id }, "masai")
            res.status(200).send({"msg":"Login Sucessfull !","token":token})
        } else {
            res.status(200).send({"err":err.message})
        }
    });
  } catch (error) {
    res.status(400).send({"error":error.message})
  }
});



module.exports = {
  userRouter,
};
