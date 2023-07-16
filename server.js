const express = require("express");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/wordRoutes")); // Use the wordRoutes file for both /api/palabras and /api/mots endpoints

app.listen(port, () => console.log(`Server started on port ${port}`));
