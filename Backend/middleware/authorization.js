const { UserModel } = require("../models/User.model");
var jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const { token } = req.query;
  if (!token) {
    return res.status(403).send({ res: "Not Authorized" });
  }
  jwt.verify(token, "webtoken", async function (err, decoded) {
    const userPresent = await UserModel.findOne({ _id: decoded?.userID });
    if (userPresent?.role === "admin") {
      // req.body.userID = userPresent._id;
      next();
    } else {
      res.status(403).send({ res: "Not Authorized" });
    }
  });
};
module.exports = { verifyToken };
