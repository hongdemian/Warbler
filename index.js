const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");

const PORT = process.env.PORT || 5000;

app.use(cors());
morgan("combined");

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", messageRoutes);

app.use(function(req, res, next) {
  let err = new Error("Not Found!");
  err.status = 404;
  next(err);
});
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
