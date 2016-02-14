var mongoose = require("mongoose");

var Note = new mongoose.Schema({
  noteName: {type: String},
  noteTags: {type: String},
  content: {type: Array},
  noteDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Note", Note);
