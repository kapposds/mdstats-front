app.controller('DiagramController', function ($scope, $http, ApiEndpoint , CPUResource) {

  // $http.get(ApiEndpoint.url + '/api/cpu')
  //   .success(function (response) {
  //     var cpuDataset = response

  //     $scope.assignResponse(cpuDataset)

  //   })

    CPUResource.get({}).$promise.then(function(response){
      $scope.cpuDataset = response
      console.log($scope.cpuDataset);
    });

    CPUResource.get({}).$promise.then(function(response){
      $scope.ramDataset = response
      console.log($scope.ramDataset);
    });    


    // if($scope.cpuDataset){
    //   console.log("iparxi dataset");
    // }else{
    //   console.log("den iparxi dataset");
    // }

  // Info for chart configuration
  $scope.diagramStaticInfo = {
    cpu: {title: 'CPU', subtitle: 'ipotitlos cpu', min:0, max: 100, xaxis_text:'CPU Usage%'},
    memory: {title: 'RAM', subtitle: 'ipotitlos ram', xaxis_text:'MB'}
  }


})
