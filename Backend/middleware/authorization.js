const { UserModel } = require("../models/User.model");
var jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const { token } = req.query;
  if (!token) {
    return res.status(403).send({ res: "Not Authorized" });
  }
  jwt.verify(token, "webtoken", async function (err, decoded) {
    const userPresent = await UserModel.findOne({ email: decoded?.email });
    console.log("userPresent:", userPresent);
    if (userPresent?.role === "admin") {
      next();
    } else {
      res.status(403).send({ res: "Not Authorized" });
    }
  });
};
module.exports = { verifyToken };
