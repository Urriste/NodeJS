"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TaskSchema = Schema({
  content: String,
  priority: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", taskSchema);
