// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
app = angular.module('mdstats', ['ionic', 'mdstats.controllers', 'highcharts-ng','ngResource','ionic-material'])
  .constant('ApiEndpoint', {
    url: 'http://192.168.1.2:5000' // api endpoint: address where laravel project "csunipi_server" is served
  })

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
      cordova.plugins.Keyboard.disableScroll(true)
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault()
    }
  })
})

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppController'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
          }
        }
      })

      .state('app.configuration', {
        url: '/configuration',
        views: {
          'menuContent': {
            templateUrl: 'templates/configuration.html',
            controller: 'ConfigurationController'
          }
        }
      })

      .state('app.diagrams', {
        url: '/diagrams',
        views: {
          'menuContent': {
            templateUrl: 'templates/diagrams.html',
            controller: 'DiagramController'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home')
  })
