require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo');
const app = express();


app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

/**
 * Aquí invocamos a la rutas
 */

app.use("/api", require("./routes"));



app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

dbConnect()