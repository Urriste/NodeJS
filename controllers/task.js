"use strict";

var controller = {
  taksData: (req, res) => {
    console.log("Hola Mundo!");

    return res.status(200).send({
      curso: "Master en Frameworks JS",
      nombre: "Lucas",
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: "Soy la accion test de mi controlador",
    });
  },
};

module.exports = controller;
