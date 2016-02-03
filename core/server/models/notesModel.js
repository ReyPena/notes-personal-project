var mongoose = require("mongoose");

var Note = new mongoose.Schema({
  noteName: {type: String},
  Tag: {type: String},
  content: {type: String},
  noteDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Note", Note);
