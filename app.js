"use strict";

//cargar modulos de node para crear el servidor
var express = require("express");
var bodyparser = require("body-parser");

//ejecutar express(http)
var app = express();

//cargar ficheros rutas

var task_routes = require("./routes/tasks");

//middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//CORS

//ruta

/* app.get("/probando", (req, res) => {
  console.log("Hola Mundo!");

  return res.status(200).send({
    curso: "Master en Frameworks JS",
    nombre: "Lucas",
  });
}); */

//añadir prefijos a rutas - Cargar rutas
app.use("/api", task_routes);

// Exportar modulo(fichero actual)
module.exports = app;
