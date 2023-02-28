const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { UserModel } = require("../models/User.model");
const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).send({ res: "Please fill all required fields" });
  }
  const isExist = await UserModel.findOne({ email });
  if (isExist?.email) {
    try {
      const hashedPassword = isExist.password;
      bcrypt.compare(password, hashedPassword, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { name: isExist.name, email: isExist.email, role: isExist.role },
            "webtoken"
          );
          res.send({
            res: `Hello ${isExist.name}`,
            name: isExist.name,
            token,
            role: isExist.role,
          });
        } else {
          res.status(404).send({ res: "Password Incorrect" });
        }
      });
    } catch (err) {
      res.send({ res: err });
    }
  } else {
    res.status(404).send({ res: "User Not Found, Try Signup First" });
  }
});

// loginRouter.post("/admin",async(req,res)=>{
//   const { email, password, role } = req.body;
//   if (!email || !password || !role) {
//     return res.status(401).send({ res: "Please fill all required fields" });
//   }
//   const isExist = await UserModel.findOne({ email });
//   if (isExist?.email) {
//     try {
//       const hashedPassword = isExist.password;
//       bcrypt.compare(password, hashedPassword, (err, result) => {
//         if (result) {
//           const token = jwt.sign(
//             { email: isExist.email, userID: isExist._id },
//             "webtoken"
//           );
//           res.send({ res: `Hello ${isExist.name}`, name: isExist.name, token });
//         } else {
//           res.status(404).send({ res: "Password Incorrect" });
//         }
//       });
//     } catch (err) {
//       res.send({ res: err });
//     }
//   } else {
//     res.status(404).send({ res: "User Not Found, Try Signup First" });
//   }
// })

module.exports = { loginRouter };
