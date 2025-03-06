require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const authRoutes = require("./authRoutes/authRoute");
const app = express();
//connect DataBase
connectDB();

//Middleware
app.use(express.json());
app.use(cors());

//sample route
app.get("/", (req, res) => {
  res.send("hello, world!");
});

//use auth route
app.use("/api/auth", authRoutes); //http://localhost:8080/api/auth/register

//start server
PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is runinig on port ${PORT}`);
});
