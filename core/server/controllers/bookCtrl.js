var book = require("../models/booksModel");

module.exports = {
  createBook: function (req, res, next) {
    new book( req.body ).save(function( err, book ) {
			if (err) {
				res.status(500).send( err );
			} else {
				res.send( book );
			}
		});
  },
  getBook: function (req, res, next) {
    book.find(req.query).exec(function (err, book) {
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(book);
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
