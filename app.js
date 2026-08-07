// 1. MUST be set before any other imports or network operations
const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Force Node.js to use Google's Public DNS



const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRouter");
const recruiterRouter = require("./routes/recruiterRouter");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", userRouter);
app.use("/user_dashboard", userRouter);
app.use("/recruiter_dashboard", recruiterRouter);

// MongoDB URL
const DBurl = "mongodb+srv://vijaykumbar083_db_user:root@cluster0.ybjn2ch.mongodb.net/Hire_Ai";

// Connect to MongoDB
mongoose
  .connect(DBurl)
  .then(() => {
    console.log("Connected To DB");

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server Connected: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database Connection Error:", err);
  });