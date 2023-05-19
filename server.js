const express = require("express");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const colors = require("colors");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/palabras', require('./routes/wordRoutes'))

app.listen(port, () => console.log(`server started on port ${port}`));
