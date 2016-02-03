var User = require("../models/userModel")
  , jwt = require("jsonwebtoken")
  , jwtSecret = "0a0a0a0a0a0a0a";

module.exports = {
  createUser: function (req, res, next) {
    console.log("here created", req.body);
    new User( req.body ).save(function( err, user ) {
			if (err) {
				res.status(500).send( err );
			} else {
				res.send( user );
			}
		});
  },
  getUser: function (req, res, next) {
    User.findById(req.params.id).then(function (err, user) {
      if(err){
        return res.status(500).send(err);
      }
      var token = jwt.sign({
        id: req.user.id,
        email: req.user.email,
        password: req.user.password
      }, jwtSecret);
      res.send({
        token: token,
        user: req.user});
    });
  },
  // getAllUsers: function (req, res, next) {
  //   if (err) {
  //     return res.status(500).send(err);
  //   }
  //   res.send(users);
  // },
  deleteUser: function(req, res, next) {
		User.findByIdAndRemove( req.query.id, function( err, user ) {
			if (err) {
				return res.status(500).send( err );
			} else {
				res.send(user);
			}
		});
	},
  updateUser: function (req, res, next) {
    user.findByIdAndUpdate(req.user._id, req.body, function (err, newUser) {
      if (err) {
        res.send(err);
      }
      res.json(newUser);
    });
  }
};
