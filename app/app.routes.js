var config = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home/templates/home.template.html'
    })
    .state('signup', {
        url: '/signup',
        templateUrl: 'signup/templates/signup.template.html',
        controller: require('./signup/controllers/signup.controller'),
        controllerAs: 'singUpCtrl'
    })
    .state('signup.profile', {
        url: '/signup/profile',
        templateUrl: 'signup/templates/signup-profile.template.html'
    })
    .state('signup.interests', {
        url: '/signup/interests',
        templateUrl: 'signup/templates/signup-interests.template.html'
    })
    .state('signup.payment', {
        url: '/signup/payment',
        templateUrl: 'signup/templates/signup-payment.template.html'
    });
};
config.$inject = ['$stateProvider', '$urlRouterProvider'];
module.exports = config;