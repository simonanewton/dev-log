const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") app.use(express.static("./client/build"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dev-log",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
    () => console.log("Connected to Dev Log MongoDB database"));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
