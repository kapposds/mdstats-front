app.controller('DiagramController', function ($scope, $http, ApiEndpoint) {

  $http.get(ApiEndpoint.url+"/api/cpu")
  .success(function(response) {
    var cpu_details = response;
    console.log(cpu_details);
  });

});