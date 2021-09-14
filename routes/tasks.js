"use strict";

var express = require("express");

var TasksController = require("../controllers/task");

var router = express.Router();

router.get("/test", TasksController.test);

module.exports = router;
