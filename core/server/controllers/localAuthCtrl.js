module.exports = {
  logout: function (req, res) {
    req.logout();
    res.send();
    console.log("you are log-out");
  },
  currentUser: function  (req, res) {
    if(req.isAuthicated()){
      res.json(req.user);
    } else {
      res.send(null);
    }
  }
};
