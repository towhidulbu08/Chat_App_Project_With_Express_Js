// external imports

const express = require("express");
const router = express.Router();

//internal imports
const { getUsers } = require("../controller/usersController");
//login page
router.get("/", getUsers);

module.exports = router;
