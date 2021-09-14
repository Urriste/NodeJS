"use strict";

var mongoose = require("mongoose");
var app = require("./app");
var port = 7070;

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/api_rest_tasks", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conexion exitosa");

    //crear servidor y escuchar peticiones
    app.listen(port, () => {
      console.log("servidor andando en http://localhost:" + port);
    });
  });
