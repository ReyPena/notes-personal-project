var note = require("../models/notesModel");

module.exports = {
  createNote: function (req, res, next) {
    console.log("here created", req.body);
    new note( req.body ).save(function( err, note ) {
			if (err) {
				res.status(500).send( err );
			} else {
				res.send(note);
			}
		});
  },
  getNote: function (req, res, next) {
    note.findById(req.params.id).then(function (err, note) {
      if(err){
        return res.status(500).send(err);
      }
      res.send(note);
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
