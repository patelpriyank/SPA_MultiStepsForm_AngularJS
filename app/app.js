var angular = require("angular");
require("angular-ui-router");
require('angular-animate');
var signup = require('./signup/signup.component');

var multiStepsFormApp = angular.module("MultiStepsFormApp", ['ui.router', 'ngAnimate', signup.name])
    .config(require('./app.routes'));


module.exports = multiStepsFormApp;