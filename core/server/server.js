var express = require("express")
  , session = require("express-session")
  , cors = require("cors")
  , bodyParser = require("body-parser")
  , mongoose = require("mongoose")
  , jwt = require("jsonwebtoken")
  , mongoUri = "mongodb://localhost:27017/notes"
  , app = express()
  , passport = require("./service/passport")
  , port = 8080;

// this are the controlleres files

var localAuthCtrl = require("./controllers/localAuthCtrl")
  , userCtrl = require("./controllers/userCtrl")
  , bookCtrl = require("./controllers/bookCtrl")
  , noteCtrl = require("./controllers/noteCtrl");

app.use(express.static("./public"));
app.use(session({secret: "nySecret", saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(cors());

///////////////
//User/////////
///////////////
app.post("/api/user", userCtrl.createUser);
app.get("/api/user", userCtrl.getUser);
app.put("/api/user", userCtrl.updateUser);
app.delete("/api/user", userCtrl.deleteUser);

///////////////
//Books////////
///////////////
app.post("/api/book", bookCtrl.createBook);
app.get("/api/book", bookCtrl.getBook);
app.put("/api/book", bookCtrl.updateBook);
app.delete("/api/book", bookCtrl.deleteBook);

///////////////
//Note/////////
///////////////
app.post("/api/note", noteCtrl.createNote);
app.get("/api/note", noteCtrl.getNote);
app.put("/api/note", noteCtrl.updateNote);
app.delete("/api/note", noteCtrl.deleteNote);

///////////////
//Local Auth///
///////////////
app.post("/auth/local", passport.authenticate("local", {
  successRedirect: '/api/user'
}));
app.get("/auth/login/currentUser", localAuthCtrl.currentUser);
app.get("/auth/logout", localAuthCtrl.logout);
// token
app.set('superSecret', localAuthCtrl.secret);


mongoose.connect(mongoUri);
mongoose.connection.once("open", function () {
  console.log("connected " + mongoUri);
});

app.listen(port, function () {
  console.log("listen and running " + port);
});
