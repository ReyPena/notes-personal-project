var User = require("../models/userModel"),
  jwt = require("jsonwebtoken"),
  jwtSecret = "0a0a0a0a0a0a0a";

module.exports = {
  createUser: function(req, res, next) {
    console.log("here created", req.body);
    new User(req.body).save(function(err, user) {
      if (err) {
        res.status(500).send(err);
      } else {
        next();
      }
    });
  },
  getUser: function(req, res, next) {
    if (req.user){
      req.params.id = req.user._id;
    }
    User.findById(req.params.id).exec(function(err, user) {
      if (err) {
        return res.status(500).send(err);
      }
      var token = jwt.sign({
        id: req.user.id,
        email: req.user.email,
        password: req.user.password
      }, jwtSecret);
      res.send({
        token: token,
        user: req.user
      });
    });
  },
  deleteUser: function(req, res, next) {
    User.findByIdAndRemove(req.query.id, function(err, user) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(user);
      }
    });
  },
  updateUser: function(req, res, next) {
    User.findByIdAndUpdate(req.user._id, req.body, function(err, newUser) {
      if (err) {
        res.send(err);
      }
      res.json(newUser);
    });
  },
  isLogged: function(req, res, next) {
    if (req.user) {
      User.findById(req.user._id, function(err, result) {
        if (err) {
          res.send(err);
        }
        if (result) {
          res.send(true);
        }
      });
    } else {
      res.send('not logged in');
    }
  }
};
