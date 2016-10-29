const express             = require('express');
const passport            = require('passport');
const Strategy            = require('passport-facebook').Strategy;
const path                = require('path');
const favicon             = require('serve-favicon');
const logger              = require('morgan');
const cookieParser        = require('cookie-parser');
const bodyParser          = require('body-parser');
const routes              = require('./routes/index');
const login               = require('./routes/login');
const profile             = require('./routes/profile');
const loginfacebook       = require('./routes/login-facebook');
const loginfacebookreturn = require('./routes/login-return');
const app                 = express();

/* Define the Facebook APP */
const facebookAppID       = "";
const facebookAppSecret   = "";
const facebookCallBackUrl = "";


passport.use(new Strategy({
    clientID: facebookAppID,
    clientSecret: facebookAppSecret,
    callbackURL: facebookCallBackUrl,
    profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)'] 
  },  
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));



passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

/// init passport and auth state if any from the session
app.use(passport.initialize());
app.use(passport.session());




app.use('/', routes);
app.use('/login', login);

app.use('/login/facebook', loginfacebook);
app.use('/login/facebook/return', loginfacebookreturn);
app.use('/profile', profile);







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(80);

module.exports = app;
