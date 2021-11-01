const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { dbConnect } = require("./shared/db");
const studentRoute = require("./routes/student");
const mentorRoute = require("./routes/mentor");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Working fine...");
});
app.use("/student", studentRoute);
app.use("/mentor", mentorRoute);

app.listen(process.env.PORT || 3000, async () => {
  await dbConnect();
  console.log("Started server");
});