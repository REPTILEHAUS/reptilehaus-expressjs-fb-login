const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { title: "PROFILE", user: req.user });
  });

module.exports = router;









