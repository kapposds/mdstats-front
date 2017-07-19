// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
app = angular.module('mdstats', ['ionic', 'mdstats.controllers', 'highcharts-ng','ngResource','ionic-material','ngStorage', 'ngCordova'])
  .constant('ApiEndpoint', {
    url: 'http://192.168.1.3:5000' // api endpoint: address where laravel project "csunipi_server" is served
  })

app.run(function ($ionicPlatform, $rootScope, $ionicLoading, $http, $timeout,
                  HelperService, ApiEndpoint) {  //this is executed only once after the app runs

  //Handle Loading Gesture (broadcasts httpInterceptor service)
  //$rootScope.$on listens to $rootScope.$broadcast
  $rootScope.$on('loading:show', function() {
    $ionicLoading.show()/*{template: 'foo'}*/
    // console.log('show')
  })
  $rootScope.$on('loading:hide', function() {
    $ionicLoading.hide()
    // console.log('hide')
  })  


  //Handle Connection Errors
  $rootScope.initialTime = true;

  function handleOffline()
  {
    HelperService.connectionErrorPopup(); //show error popup
    $timeout(function () {
      $ionicLoading.hide();    
    }, 1000);
  }

  function handleOnline()
  {
    HelperService.reconnectPopup();
    $timeout(function () {
      $ionicLoading.hide();    
    }, 1000);    
  }


  $ionicPlatform.ready(function () { //when device is ready, or if it is ready execute immedeately

    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
        if(!$rootScope.initialTime)//not for the first time
          handleOnline();
        if ($rootScope.initialTime==true)//not first time anymore
          $rootScope.initialTime = false;
    });

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
        if(!$rootScope.initialTime)//not for the first time      
          handleOffline();
        if ($rootScope.initialTime==true)//not first time anymore
          $rootScope.initialTime = false;
    });

    //Connection and Server Check on every state change
    $rootScope.$on('$stateChangeSuccess', function(e, current, pre) {
      if(navigator.onLine == false) //no connection on device
      {
        if(!$rootScope.initialTime)//not for the first time
          handleOffline();
      }
      else{ //check server only if connection is ok
        $http.get(ApiEndpoint.url+'/api/ping')//check if server is responding
        .success(function (response) {
          //server responded
          // console.log(response);
        })
        .error(function(data) {
          // console.log(data);
            HelperService.serverErrorPopup();      
            $ionicLoading.hide();            
        });    
     }

        if ($rootScope.initialTime==true)//not first time anymore
          $rootScope.initialTime = false;  
    });

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

  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    //use custom interceptors to httpProvider service
    $httpProvider.interceptors.push('httpInterceptor')

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
