const express  = require('express');
const passport = require('passport');
const router   = express.Router();
const Strategy = require('passport-facebook').Strategy;

router.get('/', 
 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
 
  function(req, res) {
    res.redirect('/profile');
  });

module.exports = router;







