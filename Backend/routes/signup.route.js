const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/User.model");
const signupRouter = express.Router();

signupRouter.post("/", async (req, res) => {
  const { email, password, name, role } = req.body;
  if (!email || !password || !name || !role) {
    return res.status(401).send({ res: "Please fill all required fields" });
  }
  const userPresent = await UserModel.findOne({ email });
  if (userPresent) {
    res.status(401).send({ res: "Try Login in User already exists" });
  } else {
    try {
      bcrypt.hash(password, 10, async (err, hash) => {
        const user = new UserModel({
          name,
          email,
          role,
          password: hash,
        });
        await user.save();
        res.status(201).send({ res: "Signup Success" });
      });
    } catch (err) {
      res.send({ res: err });
    }
  }
});

module.exports = { signupRouter };
