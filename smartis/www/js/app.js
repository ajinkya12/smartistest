/// <reference path="../index.html" />
/// <reference path="../index.html" />
var app = angular.module('issmartapp', ['ionic']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home',
    {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html'
            }
        }
    })
    .state('PA',
    {
        url: '/PA',
        views: {
            'menuContent': {
                templateUrl: 'templates/PA.html'
            }
        }
    });
    $urlRouterProvider.otherwise('/home');
});

app.controller("homeCtrl", function ($scope) {
    $scope.login = function () {
        alert('Clicked');
    }
});
