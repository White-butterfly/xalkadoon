require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");

const cors = require("cors");
 
const bodyParser = require("body-parser");

require("./server");
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("images"));
app.use(cors());

//  routes and middle ware
app.use("/api/User", require("./Routers/Auth/authRoutes"));
app.use("/api/region", require("./Routers/Region/regionRoutes"));
app.use("/api/admin", require("./Routers/Admin/adminRoutes"));

const port = process.env.port; 
app.listen(port, () => console.log(`started on port ${port}`));