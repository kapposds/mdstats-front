app.controller('ConfigurationController', function ($scope, ConfigResource, HelperService) {
  
  //values in Local Storage --------------------------------- 
  // Server Info
  $scope.serverInfo = {
    ip: "10.1.0.1",
    port: "8080"  
  }


  $scope.saveServerInfo = function(serverInfo){
    console.log(serverInfo);
  }    
  
  //User Preferances
  $scope.userPreferences = {
  	notifications : true
  }


  //values from API ----------------------------------------
  ConfigResource.get({}).$promise.then(
    function(response){
    	// console.log(response.cpu.green)
      $scope.limits = response;
    },
    function(reason) {
      console.log('Error: ' + reason);
    });

    $scope.saveLimits = function(limits){
      console.log(limits);
    }  

})
