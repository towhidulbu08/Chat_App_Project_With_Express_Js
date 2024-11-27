//external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal imports

const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

const {
  notFoundHandler,
  errorHandler,
} = require("./Middlewares/common/errorHandler");

const app = express();
dotenv.config();

const Port = process.env.PORT || 4000;

//database connection

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("Db Connected Successfully"))
  .catch((err) => console.log(err));

//request parsers

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine

app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);
//404 not found handler

app.use(notFoundHandler);

//common error handler

app.use(errorHandler);

app.listen(Port, () => {
  console.log(`App Listening To Port:${Port}`);
});
