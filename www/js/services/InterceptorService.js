app.service('httpInterceptor', function ($localStorage, $rootScope) {

  //interceptor to modify each http request from this app to use specific URL
  // this.request = function(config) {
   
  //     // set url for each http request (using values stored in local storage)
  //     config.url = 'http://'+ $localStorage.serverInfo.ip +':'+ $localStorage.serverInfo.port;
  //     console.log(config)

  //     //return the (possibly modified) config
  //     return config;
  // };

  //interceptors to show ionic loading before a request is sent and before a response is processed by a controller 
  this.request = function(config) {
      $rootScope.$broadcast('loading:show')
      // console.log('show broadcast')
      return config
  };
  this.response = function(response) {
      $rootScope.$broadcast('loading:hide')
      // console.log('hide broadcast')
      return response
  };

});