const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/User.model");
const adminRouter = express.Router();

adminRouter.get("/allUser", async (req, res) => {
  try {
    const allUsers = await UserModel.find({ role: "user" });
    res.send({ res: allUsers });
  } catch (err) {
    res.send({ res: err });
  }
});

module.exports = { adminRouter };
