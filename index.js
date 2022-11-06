const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const blogRouter = require("./routes/Blogs.route");
const userRouter = require("./routes/User.route");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcmoe to Homepage");
});

app.use("/", userRouter);
app.use("/blogs", blogRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to database succesfully");
  } catch (err) {
    console.log("Something error in connection");
  }
  console.log(`Server is lestening on ${PORT}`);
});
