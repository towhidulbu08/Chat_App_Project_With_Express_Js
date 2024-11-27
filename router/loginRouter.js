// external imports

const express = require("express");
const router = express.Router();
const decorateHtmlResponse = require("../Middlewares/common/decorateHtmlResponse");

//internal imports
const { getLogin } = require("../controller/loginController");
//login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
