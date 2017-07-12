app.controller('DiagramController', function ($scope, $http, ApiEndpoint) {

  $http.get(ApiEndpoint.url+"/api/cpu")
  .success(function(response) {
    var cpu_details = response;
    console.log(cpu_details);
  });




//Info for chart configuration
$scope.diagramsInfo = {
           cpu: {title: 'CPU', subtitle: 'from then to then'} ,
           memory:{title: 'RAM', subtitle: 'from then to then'}
}

$scope.kaka ='kakakia';

});