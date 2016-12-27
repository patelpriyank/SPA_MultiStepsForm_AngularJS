var signup = angular.module('SignUpModule', [])
    .component('signUp', {
        templateUrl: "./signup/signup.template.html",
        controller: require("./controllers/signup.controller")
    });

module.exports = signup;