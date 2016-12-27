var signUpCtrl = function SignUpCtrl($rootScope) {
    console.log("SignUpCtrl..");
    var $ctrl = this;
    $ctrl.signUpData = {};
    $ctrl.handleSignUp = function() {
        console.log("handleSignUp");
        alert("handling sign-up");
    };

    /*** Error handling ****/
    var cancellers = [];
    $ctrl.$onInit = function () {
        var cancel = $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
            console.log("stateChangeStart", $ctrl.signUpData);
        });
        cancellers.push(cancel);

        cancel = $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            console.log("stateChangeSuccess");
        });
        cancellers.push(cancel);

        cancel = $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
            console.log("stateChangeError");
        });
        cancellers.push(cancel);

        cancel = $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
            console.log("stateNotFound");
        });
        cancellers.push(cancel);

    }; //end of $oninit

    $ctrl.$onDestroy = function() {
        console.log("onDestroy");
        cancellers.foreach(function(cancel) {
            cancel();
        });
    };
};

signUpCtrl.$inject = ['$rootScope'];
module.exports = signUpCtrl;