var mongoose = require("mongoose");
var Account = require('../models/authenschema.js');

//passes to signup routes in the router folder
var authenticate = {
  signup: function(req, res) {
    //adds the data in database
    var add = {
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      UserName: req.body.UserName,
      Password: req.body.Password,
      Country: req.body.Country,
      Gender: req.body.Gender,
      Phone: req.body.Phone
    }
    var db = new Account(add);
    if (db.FirstName == '' || db.LastName == '' || db.UserName == '' || db.Password == '' || db.Country == '' || db.Gender == 'Select' || db.Phone == '') {
      res.send("Form Fields are Empty");
    } else {
      //saves only the new data in database
      db.save(function(err, db) {
        if (err) {
          res.send(err);
        } else {
          res.send("Success");
        }
      });
    }
  },

  //passes to login routes in the router folder
  login: function(req, res) {
    //checks that username exists or not
    Account.findOne({
      UserName: req.body.username
    }, function(err, data) {
      //invalid if data is null
      if (data == null) {
        res.redirect('/invalid.html');
      } else {
        //redirects to movie page if username exists
        if (req.body.username == data.UserName && req.body.password == data.Password) {
          res.redirect('/movie.html');
        } else {
          res.redirect('/invalid.html');
        }
      }
    });
  }
};

module.exports = authenticate;
