require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");

const loggerStream = require("./utils/handleLogger");

const dbConnectNoSql = require("./config/mongo");
const { dbConnectMySql } = require("./config/mysql");

const swaggerUI = require("swagger-ui-express");
const openApiConfigration = require('./docs/swagger')

const app = express();

const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function(req, res){
    return res.statusCode < 400
  }
})

const port = process.env.PORT || 3000;

/**
 * Definir ruta de documentación
 */

app.use(
  "/documentation",
  swaggerUI.serve,
  swaggerUI.setup(openApiConfigration)
);

/**
 * Aquí invocamos a la rutas
 */
app.use("/api", require("./routes"));

if(NODE_ENV !== 'test') {
  app.listen(port);
  // app.listen(port, () => {
  //   console.log(`http://localhost:${port}`);
  // });
};

ENGINE_DB === "nosql" ? dbConnectNoSql() : dbConnectMySql();

module.exports = app;