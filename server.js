const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config({ path: "./config/.env" });
require("./config/passport")(passport);

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

connectDB();

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
