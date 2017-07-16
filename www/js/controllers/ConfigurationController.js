app.controller('ConfigurationController', function ($scope, $localStorage, ConfigResource, HelperService) {
  
  //values in Local Storage --------------------------------- 
  // Server Info

  $scope.serverInfo= $localStorage.serverInfo;

  $scope.saveServerInfo = function(serverInfo){
    // console.log(serverInfo);
    $localStorage.serverInfo = serverInfo;    
  }    

  //User Preferances
  if(!$localStorage.userPreferences){//if there is no value in local storage use default values
    $localStorage.userPreferences = {//initialize object
     notifications : true
    };
  }
  $scope.userPreferences = $localStorage.userPreferences;

  $scope.saveUserPreferences = function(userPreferences){
    // console.log(userPreferences);
    $localStorage.userPreferences = userPreferences;    
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
      console.log(limits)
      ConfigResource.post(limits).$promise.then(
        function(response){
          console.log(response)
        },
        function(reason) {
          console.log('Error: ' + reason);
        });
    }  

})
