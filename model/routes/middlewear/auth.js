const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, "masai", (err, decoded) => {
        if (decoded) {
            req.body.userID = decoded.userID;
            req.body.username = decoded.username;
        next();
        console.log(decoded);
      } else {
        res.send({ msg: "you not are authorized !" });
      }
    });
  } else {
    res.send({ msg: "please Login" });
  }
};
module.exports = {
  auth,
};
