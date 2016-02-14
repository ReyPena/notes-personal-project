var mongoose = require("mongoose");

var Books = new mongoose.Schema({
  bookName: {type: String},
  bookDescription: {type: String},
  bookTopic: {type: String},
  bookDate: {type: Date, default: Date.now},
  noteIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'Note'}]
});

module.exports = mongoose.model("Books", Books);
