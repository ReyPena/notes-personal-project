var mongoose = require("mongoose")
  , bcrypt = require("bcryptjs");

var User = new mongoose.Schema({
  name: {
    firstName: {type: String, require: true},
    lastName: {type: String, require: true}
  },
  email: {type: String, unique:true, require: true},
  password: {type: String, require: true},
  age: {type: Date, require: true},
  gender: {type: String, require: true},
  createdOn: {type: Date, default: Date.now},
  books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Books'}]
});

User.pre("save", function (next) {
  var user = this;

  if (!user.isModified("password")) {
    return next();
  }
  var salt = bcrypt.genSaltSync(11);
  var hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;
  return next(null, user);
});

User.methods.verifyPassword = function (reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model("User", User);
