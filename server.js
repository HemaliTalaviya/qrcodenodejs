const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", require("./routes/qrRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));