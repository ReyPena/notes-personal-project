var note = require("../models/notesModel");

module.exports = {
  createNote: function (req, res, next) {
    new note( req.body ).save(function( err, note ) {
			if (err) {
				res.status(500).send( err );
			} else {
				res.send(note);
			}
		});
  },
  getNote: function (req, res, next) {
    note.find(req.query).exec(function (err, note) {
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(note);
    });
  },
  deleteNote: function( req, res ) {
		User.findByIdAndRemove( req.query.id, function( err, note ) {
			if (err) {
				return res.status(500).send( err );
			} else {
				res.send(note);
			}
		});
	},
  updateNote: function (req, res, next) {
    user.findByIdAndUpdate(req.user._id, req.body, function (err, newNote) {
      if (err) {
        res.send(err);
      }
      res.json(newNote);
    });
  }
};
