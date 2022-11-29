const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API Config Info
 */

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de mi API Curso de Node REST",
    version: "1.0.1",
  },
};

/**
 * Opciones
 */
const options = {
  swaggerDefinition,
  apis: [
          "./routes/*.js"
        ],
};

const openApiConfigration = swaggerJsdoc(options);

module.exports = openApiConfigration;