const express = require("express");
const router = express.Router();

const { signup } = require("../handlers/auth");

router.use("/signup", signup);

module.exports = router;
