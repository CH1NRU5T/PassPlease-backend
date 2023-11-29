const express = require("express");
const { json } = require("express");
const { default: mongoose } = require("mongoose");
var cors = require("cors");
const createUserRoute = require("./routes/createUserRoute");
const createSavedPasswordRoute = require("./routes/createSavedPasswordRoute");
const getSavedPasswordRoute = require("./routes/getSavedPasswordRoute");

const enRoute = require("./routes/enRoute");
const login = require("./routes/loginRoute");
require("dotenv").config();
const app = express();
const port = 3000;
app.use(json());
app.use(cors());
app.use("/", createUserRoute);
app.use("/", enRoute);
app.use("/", createSavedPasswordRoute);
app.use("/", login);
app.use("/", getSavedPasswordRoute);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
