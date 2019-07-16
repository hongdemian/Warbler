const jwt = require("jsonwebtoken");

//make sure user is logged in
//authentication

exports.loginRequired = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (decoded) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Please log in"
        });
      }
    });
  } catch (e) {
    return next({
      status: 401,
      message: "Please log in"
    });
  }
};

//make sure we get the correct user

exports.ensureCorrectUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (decoded && decoded.id === req.params.id) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Unauthorized"
        });
      }
    });
  } catch (e) {}
};
