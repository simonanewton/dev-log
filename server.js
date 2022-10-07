const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") app.use(express.static("./client/build"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dev-log",
    { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log("Connected to Dev Log MongoDB database"));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
