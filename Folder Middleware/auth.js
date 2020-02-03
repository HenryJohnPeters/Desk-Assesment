const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.query.token;

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      // 401 Unauthorized -- 'Incorrect token'
    }

    req.user = decoded.user;

    next();
  });
};

module.exports = {
  verifyToken
};
