var book = require("../models/booksModel");

module.exports = {
  createBook: function (req, res, next) {
    console.log("here created", req.body);
    new User( req.body ).save(function( err, book ) {
			if (err) {
				res.status(500).send( err );
			} else {
				res.send( book );
			}
		});
  },
  getBook: function (req, res, next) {
    book.findById(req.params.id).then(function (err, book) {
      if(err){
        return res.status(500).send(err);
      }
      res.send(book);
    });
  },
  deleteBook: function( req, res ) {
		User.findByIdAndRemove( req.query.id, function( err, book ) {
			if (err) {
				return res.status(500).send( err );
			} else {
				res.send(book);
			}
		});
	},
  updateBook: function (req, res, next) {
    user.findByIdAndUpdate(req.user._id, req.body, function (err, newBook) {
      if (err) {
        res.send(err);
      }
      res.json(newBook);
    });
  }
};
